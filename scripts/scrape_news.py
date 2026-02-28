#!/usr/bin/env python3
"""
Scrape og:title and og:image from a list of news URLs.
Downloads OG images and outputs structured JSON data.
"""

import json
import os
import re
import ssl
import time
import urllib.request
import urllib.error
from urllib.parse import urlparse

URLS = [
    "https://venturebeat.com/2015/11/22/10-ways-startups-can-get-the-most-out-of-linkedin/",
    "https://www.ccn.com/parisian-engineering-school-will-certify-diplomas-blockchain/",
    "https://www.lemonde.fr/economie/article/2016/01/23/des-frenchies-lancent-une-ecole-dans-la-silicon-valley_4852370_3234.html",
    "https://venturebeat.com/2016/02/04/linkedin-now-has-414-million-members-with-57-of-traffic-coming-from-mobile/",
    "https://venturebeat.com/2016/03/01/linkedin-now-automates-its-ad-targeting-based-on-your-sales-leads/",
    "https://www.lemonde.fr/pixels/article/2016/04/02/ces-francais-qui-veulent-apprendre-aux-americains-a-coder_6003264_4408996.html",
    "https://www.cnbc.com/2016/05/09/schools-are-recording-students-results-on-the-blockchain.html",
    "https://www.huffingtonpost.fr/phil-jeudy/trouver-travail-silicon-valley_b_6907612.html",
    "https://venturebeat.com/2016/07/11/international-botathon-finalists-selected-to-present-at-mobilebeat-2016/",
    "https://incafrica.com/salvador-rodriguez/long-term-coding-schools.html",
    "https://www.cio.com/article/236150/next-generation-of-software-engineers-need-training-not-retraining.html",
    "https://www.lemonde.fr/campus/article/2016/10/18/sylvain-kalache-createur-de-la-holberton-school-la-capacite-d-adaptation-est-la-competence-cle_5015623_4401467.html",
    "https://money.cnn.com/2016/11/12/technology/holberton-school-tech-education/",
    "https://insights.dice.com/2016/11/21/whiteboard-interview-problems/",
    "https://www.lemonde.fr/o21/article/2016/12/12/cinq-pistes-pour-trouver-sa-voie-d-orientation_5047490_5014018.html",
    "https://fortune.com/2017/02/06/new-age-school-raises-2-3-million-to-train-techies/",
    "https://www.lemonde.fr/campus/article/2017/03/21/les-metiers-de-la-french-touch-atouts-pour-passer-les-frontieres_5098551_4401467.html",
    "https://www.globenewswire.com/en/news-release/2017/03/22/969429/0/en/Holberton-School-for-Computer-Science-and-Software-Engineering-Founders-Awarded-Prestigious-EdTech-Digest-Education-Leaders-Award.html",
    "https://fortune.com/2017/04/18/how-rooney-ruled/",
    "https://www.lemonde.fr/ingenieurs-sciences/article/2017/05/18/les-ecoles-de-la-french-tech-s-exportent_5129973_4468267.html",
    "https://fortune.com/2017/05/30/ne-yo-holberton-school-software-camp/",
    "https://www.globenewswire.com/en/news-release/2017/05/30/1000071/0/en/Grammy-Winner-NE-YO-to-Sponsor-Summer-Coding-Camp-in-San-Francisco.html",
    "https://www.nytimes.com/2017/06/07/education/holberton-a-two-year-tech-school-emphasizes-diversity.html",
    "https://techcrunch.com/2017/10/25/holberton-gets-backing-from-more-industry-executives-as-it-looks-to-scale-its-software-engineering-school/",
    "https://www.weforum.org/agenda/2017/12/predictions-for-future-of-work/",
    "https://www.weforum.org/agenda/2018/01/podcast-education-for-the-fourth-industrial-revolution/",
    "https://www.globenewswire.com/news-release/2018/04/09/1467241/0/en/Holberton-School-for-Software-Engineering-Closes-8-million-in-A-Round-Funding.html",
    "https://www.forbes.com/sites/alexkonrad/2018/04/09/holberton-school-raises-8-2-million/",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2018/05/23/seven-marketing-initiatives-that-can-help-san-francisco-businesses-grow/",
    "https://www.forbes.com/sites/forbesmarketplace/2018/05/31/meet-six-members-of-forbes-san-francisco-business-council/",
    "https://www.cio.com/article/221783/how-the-best-managers-find-hidden-tech-talent.html",
    "https://www.nytimes.com/2018/09/21/technology/artificial-intelligence-jobs.html",
    "https://techcrunch.com/2018/09/29/ne-yo-wants-to-make-silicon-valley-more-diverse/",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2018/10/25/seven-san-francisco-entrepreneurs-share-their-strategies-for-giving-back/",
    "https://www.cio.com/article/222638/5-reasons-devops-initiatives-fail.html",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2019/01/07/five-tips-for-handling-local-competition/",
    "https://www.cio.com/article/219673/the-future-of-code-quality-security-and-agility-lies-in-machine-learning.html",
    "https://venturebeat.com/2019/02/12/linkedin-previews-shared-inmails-instant-job-notifications-and-other-new-features-coming-summer-2019/",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2019/03/06/six-ways-to-diversify-your-workforce/",
    "https://techcrunch.com/2019/06/10/holberton-opens-its-software-engineering-school-in-medellin/",
    "https://www.globenewswire.com/news-release/2019/06/10/1866541/0/en/Colombia-Bets-Big-on-Digital-Economy-Attracts-Silicon-Valley-Software-Engineering-School-and-Opens-Second-Campus.html",
    "https://www.globenewswire.com/news-release/2019/06/18/1870541/0/en/Holberton-School-and-Unity-Technologies-Partner-to-Turn-Schools-into-Augmented-Reality-Virtual-Reality-Learning-Centers.html",
    "https://www.forbes.com/sites/yolarobert1/2019/07/02/priyanka-chopra-jonas-joins-the-holberton-school-as-an-investor/",
    "https://www.globenewswire.com/en/news-release/2019/07/10/1880992/0/en/Holberton-School-Expansion-Continues-with-African-Campus.html",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2019/09/12/content-marketing-strategies-six-ways-san-francisco-small-businesses-can-stand-out/",
    "https://www.forbes.com/sites/forbessanfranciscocouncil/2019/09/18/six-things-to-remember-when-expanding-your-business-beyond-san-francisco/",
    "https://www.challenges.fr/club-entrepreneurs/holberton-school-cette-etonnante-ecole-d-informatique-que-les-etudiants-payent-une-fois-embauches_682251",
    "https://www.forbes.fr/management/holberton-school-lecole-qui-forme-les-ingenieurs-informatiques-de-demain/",
    "https://www.globenewswire.com/news-release/2019/11/25/1952161/0/en/Legendary-Educator-Esther-Wojcicki-Joins-Board-of-Trustees-of-Holberton-School.html",
    "https://www.globenewswire.com/news-release/2019/12/17/1961819/0/en/Holberton-School-Launches-New-Machine-Learning-Curriculum-Encouraging-Greater-Diversity-in-this-Increasingly-Important-Field.html",
    "https://www.globenewswire.com/news-release/2020/02/06/1980688/0/en/Holberton-School-Hires-New-COO-Campus-Managers.html",
    "https://www.globenewswire.com/news-release/2020/02/20/1988097/0/en/Holberton-School-Welcomes-New-Global-Cohort.html",
    "https://www.globenewswire.com/news-release/2020/03/06/1996735/0/en/In-Wake-of-Hurricane-Maria-and-Recent-Earthquake-Silicon-Valley-Software-Engineering-School-Opens-Campus-in-Puerto-Rico.html",
    "https://www.globenewswire.com/news-release/2020/04/13/2015057/0/en/Leading-Coding-School-Holberton-Moves-Fully-Online.html",
    "https://venturebeat.com/2020/04/30/linkedins-ai-gives-job-candidates-feedback-on-their-interview-answers/",
    "https://www.forbes.com/sites/yolarobert1/2020/07/13/legendary-songwriter-savan-kotecha-joins-holberton-school-board-of-trustees-to-increase-tech-diversity/",
    "https://www.globenewswire.com/en/news-release/2020/08/05/2073012/0/fr/Holberton-School-ouvre-ses-portes-en-France-offrant-1-000-000-de-bourse-etudiante.html",
    "https://www.globenewswire.com/en/news-release/2020/11/02/2118158/0/en/Holberton-Brings-Silicon-Valley-Caliber-Software-Engineering-Education-to-Hauts-de-France.html",
    "https://www.globenewswire.com/en/news-release/2020/11/13/2126723/0/pt/Ministro-do-Trabalho-e-Previdencia-Social-do-Uruguai-Inaugura-Campus-da-Holberton-School-em-Montevideu.html",
    "https://www.globenewswire.com/news-release/2020/11/13/2126333/0/en/Holberton-School-s-Montevideo-Campus-Inaugurated-by-Uruguay-s-Minister-of-Labor-and-Social-Welfare.html",
    "https://www.globenewswire.com/en/news-release/2020/12/03/2139405/0/es/Educacion-de-nivel-Silicon-Valley-llega-a-Peru.html",
    "https://www.forbes.com/sites/forbesbusinesscouncil/2020/12/16/13-critical-considerations-when-planning-a-company-pivot/",
    "https://www.globenewswire.com/news-release/2021/01/19/2160985/0/en/Coderise-International-joins-Holberton-School-Ecuador.html",
    "https://www.forbes.com/sites/forbesbusinesscouncil/2021/04/22/four-reasons-to-take-notes-by-hand/",
    "https://techcrunch.com/2021/03/25/holberton-raises-20m-as-it-pivots-to-become-an-edtech-saas-company/",
    "https://www.globenewswire.com/en/news-release/2021/05/27/2237661/0/en/Holberton-School-Named-to-GSV-EdTech-150.html",
    "https://www.tipsclear.in/6-strategies-for-running-more-effective-startup-board-meetings-cleartips/",
    "https://www.forbes.com/sites/forbesbusinesscouncil/2021/09/21/15-ways-entrepreneurs-can-start-mitigating-the-impact-of-climate-change/",
    "https://techcrunch.com/2022/07/13/african-leadership-group-acquires-coding-school-holberton/",
]

THUMBNAILS_DIR = "/Users/sylvainkalache/Dropbox/work/my-project/public/thumbnails"
OUTPUT_JSON = "/Users/sylvainkalache/Dropbox/work/my-project/scripts/news_data.json"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

PUBLICATION_MAP = {
    "venturebeat.com": "VentureBeat",
    "ccn.com": "CCN",
    "lemonde.fr": "Le Monde",
    "cnbc.com": "CNBC",
    "huffingtonpost.fr": "Huffington Post",
    "incafrica.com": "Inc Africa",
    "cio.com": "CIO",
    "cnn.com": "CNN",
    "money.cnn.com": "CNN Money",
    "insights.dice.com": "Dice Insights",
    "fortune.com": "Fortune",
    "globenewswire.com": "GlobeNewsWire",
    "nytimes.com": "The New York Times",
    "techcrunch.com": "TechCrunch",
    "weforum.org": "World Economic Forum",
    "forbes.com": "Forbes",
    "forbes.fr": "Forbes France",
    "challenges.fr": "Challenges",
    "tipsclear.in": "TipsClear",
}


def get_publication(url):
    parsed = urlparse(url)
    hostname = parsed.hostname or ""
    if hostname in PUBLICATION_MAP:
        return PUBLICATION_MAP[hostname]
    hostname_no_www = hostname.replace("www.", "")
    if hostname_no_www in PUBLICATION_MAP:
        return PUBLICATION_MAP[hostname_no_www]
    for key, name in PUBLICATION_MAP.items():
        if hostname.endswith(key):
            return name
    domain = hostname_no_www.split(".")[0]
    return domain.capitalize()


def extract_date_from_url(url):
    match = re.search(r'/(\d{4})/(\d{2})/(\d{2})/', url)
    if match:
        return f"{match.group(1)}-{match.group(2)}-{match.group(3)}"
    match = re.search(r'/(\d{4})/(\d{2})/', url)
    if match:
        return f"{match.group(1)}-{match.group(2)}"
    return None


def fetch_page(url):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,fr;q=0.8",
    })
    with urllib.request.urlopen(req, timeout=15, context=ctx) as response:
        content_type = response.headers.get("Content-Type", "")
        encoding = "utf-8"
        if "charset=" in content_type:
            encoding = content_type.split("charset=")[-1].strip()
        data = response.read()
        try:
            return data.decode(encoding, errors="replace")
        except (LookupError, UnicodeDecodeError):
            return data.decode("utf-8", errors="replace")


def extract_og_title(html):
    match = re.search(
        r'<meta\s+[^>]*property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
        html, re.IGNORECASE
    )
    if not match:
        match = re.search(
            r'<meta\s+[^>]*content=["\']([^"\']+)["\'][^>]*property=["\']og:title["\']',
            html, re.IGNORECASE
        )
    if match:
        return html_decode(match.group(1).strip())
    return None


def extract_title_tag(html):
    match = re.search(r'<title[^>]*>([^<]+)</title>', html, re.IGNORECASE)
    if match:
        return html_decode(match.group(1).strip())
    return None


def extract_og_image(html):
    match = re.search(
        r'<meta\s+[^>]*property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\']',
        html, re.IGNORECASE
    )
    if not match:
        match = re.search(
            r'<meta\s+[^>]*content=["\']([^"\']+)["\'][^>]*property=["\']og:image["\']',
            html, re.IGNORECASE
        )
    if match:
        return match.group(1).strip()
    return None


def html_decode(text):
    text = text.replace("&amp;", "&")
    text = text.replace("&lt;", "<")
    text = text.replace("&gt;", ">")
    text = text.replace("&quot;", '"')
    text = text.replace("&#39;", "'")
    text = text.replace("&apos;", "'")
    text = text.replace("&#x27;", "'")
    text = text.replace("&nbsp;", " ")
    text = text.replace("&#8217;", "\u2019")
    text = text.replace("&#8216;", "\u2018")
    text = text.replace("&#8220;", "\u201c")
    text = text.replace("&#8221;", "\u201d")
    text = text.replace("&#8211;", "\u2013")
    text = text.replace("&#8212;", "\u2014")
    text = re.sub(r'&#(\d+);', lambda m: chr(int(m.group(1))), text)
    text = re.sub(r'&#x([0-9a-fA-F]+);', lambda m: chr(int(m.group(1), 16)), text)
    return text


def download_image(image_url, filepath):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request(image_url, headers={
        "User-Agent": USER_AGENT,
        "Accept": "image/*,*/*;q=0.8",
    })
    try:
        with urllib.request.urlopen(req, timeout=15, context=ctx) as response:
            data = response.read()
            with open(filepath, "wb") as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"  [WARN] Failed to download image: {e}")
        return False


def main():
    results = []
    total = len(URLS)

    for idx, url in enumerate(URLS):
        index = idx + 1
        print(f"[{index}/{total}] Processing: {url}")

        publication = get_publication(url)
        date = extract_date_from_url(url)

        try:
            html = fetch_page(url)
        except Exception as e:
            print(f"  [ERROR] Failed to fetch page: {e}")
            results.append({
                "index": index,
                "url": url,
                "publication": publication,
                "date": date,
                "title": None,
                "og_image": None,
                "thumbnail": None,
                "error": str(e),
            })
            time.sleep(0.5)
            continue

        og_title = extract_og_title(html)
        title_tag = extract_title_tag(html)
        title = og_title or title_tag
        og_image = extract_og_image(html)

        thumbnail_filename = None
        if og_image:
            thumbnail_filename = f"news-{index}.jpg"
            thumbnail_path = os.path.join(THUMBNAILS_DIR, thumbnail_filename)
            print(f"  Title: {title}")
            print(f"  OG Image: {og_image[:100]}...")
            success = download_image(og_image, thumbnail_path)
            if not success:
                thumbnail_filename = None
        else:
            print(f"  Title: {title}")
            print(f"  [WARN] No og:image found")

        results.append({
            "index": index,
            "url": url,
            "publication": publication,
            "date": date,
            "title": title,
            "og_image": og_image,
            "thumbnail": thumbnail_filename,
        })

        time.sleep(0.5)

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nDone! Processed {total} URLs.")
    print(f"JSON written to: {OUTPUT_JSON}")

    success_count = sum(1 for r in results if r.get("title"))
    image_count = sum(1 for r in results if r.get("thumbnail"))
    error_count = sum(1 for r in results if r.get("error"))
    print(f"Titles extracted: {success_count}/{total}")
    print(f"Images downloaded: {image_count}/{total}")
    print(f"Errors: {error_count}/{total}")


if __name__ == "__main__":
    main()
