from bse import BSE
import json
from datetime import datetime

with BSE(download_folder="./") as bse:
    scripCode = bse.getScripCode("tcs")  # 532540 bse scrip code
    data = bse.actions(scripcode=scripCode)
    with open("data.json", "w") as json_file:
        json.dump(data, json_file, indent=4)
    date_string = "14 Jun 2024"
    bse.bhavcopyReport(date=datetime.strptime(date_string, "%d %b %Y"))
    ohlc = bse.quote(scripCode)  # Open, High, Low, LTP
