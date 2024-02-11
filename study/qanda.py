import random
import roman
from math import gcd

class FormulaNam:
    def fle_nafle():
        felezat = {
            "0": ["Li", "لیتیم", [''], "Lithium"],
            "1": ["Na", "سدیم", [''], "Sodium"],
            "2": ["K", "پتاسیم", [''], "Potassium"],
            "3": ["Rb", "روبیدیم", [''], "Rubidium"],
            "4": ["Cs", "سزیم", [''], "Cesium"],
            
            "5": ["Be", "بریلیم", ['2'], "Beryllium"],
            "6": ["Mg", "منیزیم", ['2'], "Magnesium"],
            "7": ["Ca", "کلسیم", ['2'], "Calcium"],
            "8": ["Sr", "استرانسیم", ['2'], "Strontium"],
            "9": ["Ba", "باریم", ['2'], "Barium"],
            
            "10": ["B", "بور", ['3'], "Boron"],
            "11": ["Al", "آلومینیم", ['3'], "Aluminum"],
            
            "12": ["Sn", "قلع", ['2', '4'], "Tin"],
            "13": ["Pb", "سرب", ['2', '4'], "Lead"],
            
            "14": ["Ag", "نقره", [''], "Silver"],
            "15": ["Hg", "جیوه", ['', '2'], "Mercury"],
            "16": ["Cu", "مس", ['', '2'], "Copper"],
            "17": ["Zn", "روی", ['2'], "Zinc"],
            "18": ["Cd", "کادمیم", ['2'], "Cadmium"],
            "19": ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
            "20": ["Fe", "آهن", ['2', '3'], "Iron"],
            "21": ["Ni", "نیکل", ['2', '3'], "Nickel"],
            "22": ["Co", "کبالت", ['2', '3'], "Cobalt"],
            "23": ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
            "24": ["NH4", "آمونیوم", [''], "Amunium"],
        }

        nafelezat = {
            "0": ["Br", "اکسید", ['']],
            "1": ["Cl", "کلرید", ['']],
            "2": ["F", "فلوئورید", ['']],
            "3": ["O", "اکسید", ['2']],
            "4": ["S", "سولفید", ['2']],
            "5": ["P", "فسفید", ['3']],
            "6": ["N", "نیترید", ['3']],
            "7": ["I", "یدید", ['']],
        }

        chosen_felez = felezat[str(random.randint(0, len(felezat) - 1))]
        chosen_nafelez = nafelezat[str(random.randint(0, len(nafelezat) - 1))]

        namad_felez = chosen_felez[0]
        namad_nafelez = chosen_nafelez[0]

        esm_felez = chosen_felez[1]
        esm_nafelez = chosen_nafelez[1]

        tedad_zarfiat_felez = len(chosen_felez[2])

        zarfiat_felez = chosen_felez[2][random.randint(0, tedad_zarfiat_felez - 1)]
        zarfiat_nafelez = chosen_nafelez[2][0]

        if len(chosen_felez[2]) != 1:
            nam = esm_felez + "(" + roman.toRoman(int(zarfiat_felez)) + ")" + " " + esm_nafelez
        else:
            nam = esm_felez + " " + esm_nafelez

        if zarfiat_felez == zarfiat_nafelez:
            zarfiat_felez, zarfiat_nafelez = "", ""

        if zarfiat_felez == "":
            int_zarfiat_felez = 1
        else:
            int_zarfiat_felez = int(zarfiat_felez)

        if zarfiat_nafelez == "":
            int_zarfiat_nafelez = 1
        else:
            int_zarfiat_nafelez = int(zarfiat_nafelez)

        if gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1:
            zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
            zarfiat_nafelez = zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)

        if any(char.isdigit() for char in namad_felez):
            if zarfiat_nafelez != "":
                namad_felez = "(" + namad_felez + ")"

        if any(char.isdigit() for char in namad_nafelez) or namad_nafelez == 'CN':
            if zarfiat_felez != "":
                namad_nafelez = "(" + namad_nafelez + ")"

        formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez

        return formula, nam


    """
    def nafle_nafle():
        naflez_naflez = {
            "1": ["CO2", "کربن دی اکسید"]
        }
        
        formula = naflez_naflez["1"][0]
        nam = naflez_naflez["1"][1]
        
        return formula, nam
    """

    
    def fle_hidroxide():
        felezat = {
            "0": ["Li", "لیتیم", [''], "Lithium"],
            "1": ["Na", "سدیم", [''], "Sodium"],
            "2": ["K", "پتاسیم", [''], "Potassium"],
            "3": ["Rb", "روبیدیم", [''], "Rubidium"],
            "4": ["Cs", "سزیم", [''], "Cesium"],
            
            "5": ["Be", "بریلیم", ['2'], "Beryllium"],
            "6": ["Mg", "منیزیم", ['2'], "Magnesium"],
            "7": ["Ca", "کلسیم", ['2'], "Calcium"],
            "8": ["Sr", "استرانسیم", ['2'], "Strontium"],
            "9": ["Ba", "باریم", ['2'], "Barium"],
            
            "10": ["B", "بور", ['3'], "Boron"],
            "11": ["Al", "آلومینیم", ['3'], "Aluminum"],
            
            "12": ["Sn", "قلع", ['2', '4'], "Tin"],
            "13": ["Pb", "سرب", ['2', '4'], "Lead"],
            
            "14": ["Ag", "نقره", [''], "Silver"],
            "15": ["Hg", "جیوه", ['', '2'], "Mercury"],
            "16": ["Cu", "مس", ['', '2'], "Copper"],
            "17": ["Zn", "روی", ['2'], "Zinc"],
            "18": ["Cd", "کادمیم", ['2'], "Cadmium"],
            "19": ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
            "20": ["Fe", "آهن", ['2', '3'], "Iron"],
            "21": ["Ni", "نیکل", ['2', '3'], "Nickel"],
            "22": ["Co", "کبالت", ['2', '3'], "Cobalt"],
            "23": ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
            "24": ["NH4", "آمونیوم", [''], "Amunium"],
        }

        nafelezat = {
            "0": ["OH", "هیدروکسید", ['']],
        }

        chosen_felez = felezat[str(random.randint(0, len(felezat) - 1))]
        chosen_nafelez = nafelezat[str(random.randint(0, len(nafelezat) - 1))]

        namad_felez = chosen_felez[0]
        namad_nafelez = chosen_nafelez[0]

        esm_felez = chosen_felez[1]
        esm_nafelez = chosen_nafelez[1]

        tedad_zarfiat_felez = len(chosen_felez[2])

        zarfiat_felez = chosen_felez[2][random.randint(0, tedad_zarfiat_felez - 1)]
        zarfiat_nafelez = chosen_nafelez[2][0]

        if len(chosen_felez[2]) != 1:
            nam = esm_felez + "(" + roman.toRoman(int(zarfiat_felez)) + ")" + " " + esm_nafelez
        else:
            nam = esm_felez + " " + esm_nafelez

        if zarfiat_felez == zarfiat_nafelez:
            zarfiat_felez, zarfiat_nafelez = "", ""

        if zarfiat_felez == "":
            int_zarfiat_felez = 1
        else:
            int_zarfiat_felez = int(zarfiat_felez)

        if zarfiat_nafelez == "":
            int_zarfiat_nafelez = 1
        else:
            int_zarfiat_nafelez = int(zarfiat_nafelez)

        if gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1:
            zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
            zarfiat_nafelez = zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)

        if any(char.isdigit() for char in namad_felez):
            if zarfiat_nafelez != "":
                namad_felez = "(" + namad_felez + ")"

        if any(char.isdigit() for char in namad_nafelez) or namad_nafelez == 'CN':
            if zarfiat_felez != "":
                namad_nafelez = "(" + namad_nafelez + ")"

        formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez

        return formula, nam


    def fle_bonian():
        felezat = {
            "0": ["Li", "لیتیم", [''], "Lithium"],
            "1": ["Na", "سدیم", [''], "Sodium"],
            "2": ["K", "پتاسیم", [''], "Potassium"],
            "3": ["Rb", "روبیدیم", [''], "Rubidium"],
            "4": ["Cs", "سزیم", [''], "Cesium"],
            
            "5": ["Be", "بریلیم", ['2'], "Beryllium"],
            "6": ["Mg", "منیزیم", ['2'], "Magnesium"],
            "7": ["Ca", "کلسیم", ['2'], "Calcium"],
            "8": ["Sr", "استرانسیم", ['2'], "Strontium"],
            "9": ["Ba", "باریم", ['2'], "Barium"],
            
            "10": ["B", "بور", ['3'], "Boron"],
            "11": ["Al", "آلومینیم", ['3'], "Aluminum"],
            
            "12": ["Sn", "قلع", ['2', '4'], "Tin"],
            "13": ["Pb", "سرب", ['2', '4'], "Lead"],
            
            "14": ["Ag", "نقره", [''], "Silver"],
            "15": ["Hg", "جیوه", ['', '2'], "Mercury"],
            "16": ["Cu", "مس", ['', '2'], "Copper"],
            "17": ["Zn", "روی", ['2'], "Zinc"],
            "18": ["Cd", "کادمیم", ['2'], "Cadmium"],
            "19": ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
            "20": ["Fe", "آهن", ['2', '3'], "Iron"],
            "21": ["Ni", "نیکل", ['2', '3'], "Nickel"],
            "22": ["Co", "کبالت", ['2', '3'], "Cobalt"],
            "23": ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
            "24": ["NH4", "آمونیوم", [''], "Amunium"],
        }

        nafelezat = {
            "0": ["NO2", "نیتریت", ['']],
            "1": ["NO3", "نیترات", ['']],
            "2": ["SO3", "سولفیت", ['2']],
            "3": ["SO4", "سولفات", ['2']],
            "4": ["PO4", "فسفات", ['3']],
            "5": ["CO3", "کربنات", ['2']],
            "6": ["MnO4", "منگنات", ['2']],
            "7": ["MnO4", "پرمنگنات", ['']],
            "8": ["CrO4", "کرومات", ['2']],
            "9": ["Cr2O7", "دی کرومات", ['2']],
            "10": ["CN", "سیانید", ['']],
            "11": ["O2", "پراکسید", ['2']],
        }

        chosen_felez = felezat[str(random.randint(0, len(felezat) - 1))]
        chosen_nafelez = nafelezat[str(random.randint(0, len(nafelezat) - 1))]

        namad_felez = chosen_felez[0]
        namad_nafelez = chosen_nafelez[0]

        esm_felez = chosen_felez[1]
        esm_nafelez = chosen_nafelez[1]

        tedad_zarfiat_felez = len(chosen_felez[2])

        zarfiat_felez = chosen_felez[2][random.randint(0, tedad_zarfiat_felez - 1)]
        zarfiat_nafelez = chosen_nafelez[2][0]

        if len(chosen_felez[2]) != 1:
            nam = esm_felez + "(" + roman.toRoman(int(zarfiat_felez)) + ")" + " " + esm_nafelez
        else:
            nam = esm_felez + " " + esm_nafelez

        if zarfiat_felez == zarfiat_nafelez:
            zarfiat_felez, zarfiat_nafelez = "", ""

        if zarfiat_felez == "":
            int_zarfiat_felez = 1
        else:
            int_zarfiat_felez = int(zarfiat_felez)

        if zarfiat_nafelez == "":
            int_zarfiat_nafelez = 1
        else:
            int_zarfiat_nafelez = int(zarfiat_nafelez)

        if gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1:
            zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
            zarfiat_nafelez = zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)

        if any(char.isdigit() for char in namad_felez):
            if zarfiat_nafelez != "":
                namad_felez = "(" + namad_felez + ")"

        if any(char.isdigit() for char in namad_nafelez) or namad_nafelez == 'CN':
            if zarfiat_felez != "":
                namad_nafelez = "(" + namad_nafelez + ")"

        formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez

        return formula, nam
            
