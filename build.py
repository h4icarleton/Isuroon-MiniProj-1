from bs4 import BeautifulSoup
from translation_dictionary import translations
from dotenv import load_dotenv
import shutil, os


load_dotenv()
SRC = os.getenv("SRC")
DST_EN = os.getenv("DST_EN")
DST_SO = os.getenv("DST_SO")
assert SRC is not None
assert DST_EN is not None
assert DST_SO is not None


if not os.path.exists(DST_EN):
    os.mkdir(DST_EN)
if not os.path.exists(DST_SO):
    os.mkdir(DST_SO)

shutil.rmtree(DST_EN)
shutil.rmtree(DST_SO)

shutil.copytree(SRC, DST_EN)
shutil.copytree(SRC, DST_SO)

for root, _, filename in os.walk(DST_SO):
    for html_file in [f for f in filename if f.endswith(".html")]:
        input = open(os.path.join(root, html_file), "r")
        contents = input.read()
        input.close()
        soup = BeautifulSoup(contents, "html.parser")
        soup.find("html")["lang"] = "so"
        tags = soup.find_all(attrs={"tr": True})
        for tag in tags:
            if tag["tr"] in translations:
                tag.string = translations[tag["tr"]]["so"]
                del tag["tr"]
            else:
                print(f"Could not find translations for code")
        output = open(os.path.join(root, html_file), "w")
        output.write(str(soup))
        output.close()

for root, _, filename in os.walk(DST_EN):
    for html_file in [f for f in filename if f.endswith(".html")]:
        input = open(os.path.join(root, html_file), "r")
        contents = input.read()
        input.close()
        soup = BeautifulSoup(contents, "html.parser")
        soup.find("html")["lang"] = "en"
        tags = soup.find_all(attrs={"tr": True})
        for tag in tags:
            if tag["tr"] in translations:
                tag.string = translations[tag["tr"]]["en"]
                del tag["tr"]
            else:
                print(f"Could not find translations for code: {tag['tr']}")
        output = open(os.path.join(root, html_file), "w")
        output.write(str(soup))
        output.close()