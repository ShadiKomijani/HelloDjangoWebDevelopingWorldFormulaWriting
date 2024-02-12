function myFun() {
}

// base preps
let fw_ask_q = 1;
let current_topic = undefined;
let current_question = 404;
let current_answer = undefined;
let asked_types = [];
let asked_questions = [];
let asked_topics = [];
let numberof_asked_questions = 0;
let answered_questions = 0;
let uncorrect_answers = 0;
let unanswered_questions = 0;
let txt = "جواب را وارد کنید.";


// prep tops
let chosen_topics = [];
let chosen_type_fw = "";
let chosen_type_aa = "";
function handleClickFwDoFlenafle(checkbox) {
  if(checkbox.checked){
    if (!("FwDoFlenafle" in chosen_topics)) {
      chosen_topics.push("FwDoFlenafle")
    }
  }
  else{
      chosen_topics.pop("FwDoFlenafle")
  }
}
function handleClickFwDoNalenafle(checkbox) {
  if(checkbox.checked){
    if (!("FwDoNalenafle" in chosen_topics)) {
      chosen_topics.push("FwDoNalenafle")
    }
  }
  else{
      chosen_topics.pop("FwDoNalenafle")
  }
}
function handleClickFwSeHidroxide(checkbox) {
  if(checkbox.checked){
    if (!("FwSeHidroxide" in chosen_topics)) {
      chosen_topics.push("FwSeHidroxide")
    }
  }
  else{
      chosen_topics.pop("FwSeHidroxide")
  }
}
function handleClickFwSeAsidOxygeneDar(checkbox) {
  if(checkbox.checked){
    if (!("FwSeAsidOxygeneDar" in chosen_topics)) {
      chosen_topics.push("FwSeAsidOxygeneDar")
    }
  }
  else{
      chosen_topics.pop("FwSeAsidOxygeneDar")
  }
}
function handleClickFwSeAsidBiOxygene(checkbox) {
  if(checkbox.checked){
    if (!("FwSeAsidBiOxygene" in chosen_topics)) {
      chosen_topics.push("FwSeAsidBiOxygene")
    }
  }
  else{
      chosen_topics.pop("FwSeAsidBiOxygene")
  }
}
function handleClickFwSeNamak(checkbox) {
  if(checkbox.checked){
    if (!("FwSeNamak" in chosen_topics)) {
      chosen_topics.push("FwSeNamak")
    }
  }
  else{
      chosen_topics.pop("FwSeNamak")
  }
}
function handleClickAaAsli(checkbox) {
  if(checkbox.checked){
    if (!("AaAsli" in chosen_topics)) {
      chosen_topics.push("AaAsli")
    }
  }
  else{
      chosen_topics.pop("AaAsli")
  }
}
function handleClickAaVasete(checkbox) {
  if(checkbox.checked){
    if (!("AaVasete" in chosen_topics)) {
      chosen_topics.push("AaVasete")
    }
  }
  else{
      chosen_topics.pop("AaVasete")
  }
}
function handeClickFbn(radio) {
  if(radio.checked){
    chosen_type_fw = "Fbn";
  }
}
function handeClickNbf(radio) {
  if(radio.checked){
    chosen_type_fw = "Nbf"
  }
}
function handeClickBoth(radio) {
  if(radio.checked){
    chosen_type_fw = "Both"
  }
}

// needed base funs
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
function hasNumber(str) {
  return /\d/.test(str);
}


// get QandA funs
function fleNafle() {
        felezat = {
            0: ["Li", "لیتیم", [''], "Lithium"],
            1: ["Na", "سدیم", [''], "Sodium"],
            2: ["K", "پتاسیم", [''], "Potassium"],
            3: ["Rb", "روبیدیم", [''], "Rubidium"],
            4: ["Cs", "سزیم", [''], "Cesium"],
            
            5: ["Be", "بریلیم", ['2'], "Beryllium"],
            6: ["Mg", "منیزیم", ['2'], "Magnesium"],
            7: ["Ca", "کلسیم", ['2'], "Calcium"],
            8: ["Sr", "استرانسیم", ['2'], "Strontium"],
            9: ["Ba", "باریم", ['2'], "Barium"],
            
            10: ["B", "بور", ['3'], "Boron"],
            11: ["Al", "آلومینیم", ['3'], "Aluminum"],
            
            12: ["Sn", "قلع", ['2', '4'], "Tin"],
            13: ["Pb", "سرب", ['2', '4'], "Lead"],
            
            14: ["Ag", "نقره", [''], "Silver"],
            15: ["Hg", "جیوه", ['', '2'], "Mercury"],
            16: ["Cu", "مس", ['', '2'], "Copper"],
            17: ["Zn", "روی", ['2'], "Zinc"],
            18: ["Cd", "کادمیم", ['2'], "Cadmium"],
            19: ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
            20: ["Fe", "آهن", ['2', '3'], "Iron"],
            21: ["Ni", "نیکل", ['2', '3'], "Nickel"],
            22: ["Co", "کبالت", ['2', '3'], "Cobalt"],
            23: ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
            24: ["NH4", "آمونیوم", [''], "Amunium"],
        };

        nafelezat = {
            0: ["Br", "برمید", ['']],
            1: ["Cl", "کلرید", ['']],
            2: ["F", "فلوئورید", ['']],
            3: ["O", "اکسید", ['2']],
            4: ["S", "سولفید", ['2']],
            5: ["P", "فسفید", ['3']],
            6: ["N", "نیترید", ['3']],
            7: ["I", "یدید", ['']],
        };
        const chosen_felez = felezat[randomNumber(0, 24)];
        const chosen_nafelez = nafelezat[randomNumber(0, 7)];

        let namad_felez = chosen_felez[0];
        let namad_nafelez = chosen_nafelez[0];

        const esm_felez = chosen_felez[1];
        const esm_nafelez = chosen_nafelez[1];

        const tedad_zarfiat_felez = chosen_felez[2].length;

        const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
        let zarfiat_felez = chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
        let zarfiat_nafelez = chosen_nafelez[2][0];

        let int_zarfiat_felez = 1;
        if (zarfiat_felez == "") {
            int_zarfiat_felez = 1;
        } else {
            int_zarfiat_felez = parseInt(zarfiat_felez);
        }

        let int_zarfiat_nafelez = 1;
        if (zarfiat_nafelez == "") {
            int_zarfiat_nafelez = 1;
        } else {
            int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
        }

        if (chosen_felez[2].length != 1) {
            nam = esm_felez + "(" + romanize(parseInt(int_zarfiat_felez)) + ")" + " " + esm_nafelez;
        } else {
            nam = esm_felez + " " + esm_nafelez;
        }

        if (zarfiat_felez == zarfiat_nafelez) {
            zarfiat_felez = "";
            zarfiat_nafelez = "";
        }

        int_zarfiat_felez = 1;
        if (zarfiat_felez == "") {
            int_zarfiat_felez = 1;
        } else {
            int_zarfiat_felez = parseInt(zarfiat_felez);
        }

        int_zarfiat_nafelez = 1;
        if (zarfiat_nafelez == "") {
            int_zarfiat_nafelez = 1;
        } else {
            int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
        }

        if (gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1) {
            zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
            zarfiat_nafelez = zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
        }

        if (hasNumber(namad_felez)) {
            if (zarfiat_nafelez != "") {
                namad_felez = "(" + namad_felez + ")"
            }
        }

        if (zarfiat_nafelez == 1) {
          zarfiat_nafelez = "";
        }

        if (zarfiat_felez == 1) {
          zarfiat_felez = "";
        }

        formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

        return formula, nam
      }
function nafleNafle() {
}
function hidroxide() {
  felezat = {
      0: ["Li", "لیتیم", [''], "Lithium"],
      1: ["Na", "سدیم", [''], "Sodium"],
      2: ["K", "پتاسیم", [''], "Potassium"],
      3: ["Rb", "روبیدیم", [''], "Rubidium"],
      4: ["Cs", "سزیم", [''], "Cesium"],
      
      5: ["Be", "بریلیم", ['2'], "Beryllium"],
      6: ["Mg", "منیزیم", ['2'], "Magnesium"],
      7: ["Ca", "کلسیم", ['2'], "Calcium"],
      8: ["Sr", "استرانسیم", ['2'], "Strontium"],
      9: ["Ba", "باریم", ['2'], "Barium"],
      
      10: ["B", "بور", ['3'], "Boron"],
      11: ["Al", "آلومینیم", ['3'], "Aluminum"],
      
      12: ["Sn", "قلع", ['2', '4'], "Tin"],
      13: ["Pb", "سرب", ['2', '4'], "Lead"],
      
      14: ["Ag", "نقره", [''], "Silver"],
      15: ["Hg", "جیوه", ['', '2'], "Mercury"],
      16: ["Cu", "مس", ['', '2'], "Copper"],
      17: ["Zn", "روی", ['2'], "Zinc"],
      18: ["Cd", "کادمیم", ['2'], "Cadmium"],
      19: ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
      20: ["Fe", "آهن", ['2', '3'], "Iron"],
      21: ["Ni", "نیکل", ['2', '3'], "Nickel"],
      22: ["Co", "کبالت", ['2', '3'], "Cobalt"],
      23: ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
      24: ["NH4", "آمونیوم", [''], "Amunium"],
  };

  nafelezat = {
      0: ["OH", "هیدروکسید", ['']],
  };
  const chosen_felez = felezat[randomNumber(0, 24)];
  const chosen_nafelez = nafelezat[0];

  let namad_felez = chosen_felez[0];
  let namad_nafelez = chosen_nafelez[0];

  const esm_felez = chosen_felez[1];
  const esm_nafelez = chosen_nafelez[1];

  const tedad_zarfiat_felez = chosen_felez[2].length;

  const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
  let zarfiat_felez = chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
  let zarfiat_nafelez = chosen_nafelez[2][0];

  let int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
      int_zarfiat_felez = 1;
  } else {
      int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  let int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
      int_zarfiat_nafelez = 1;
  } else {
      int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (chosen_felez[2].length != 1) {
      nam = esm_felez + "(" + romanize(parseInt(int_zarfiat_felez)) + ")" + " " + esm_nafelez;
  } else {
      nam = esm_felez + " " + esm_nafelez;
  }

  if (zarfiat_felez == zarfiat_nafelez) {
      zarfiat_felez = "";
  }

  int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
      int_zarfiat_felez = 1;
  } else {
      int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
      int_zarfiat_nafelez = 1;
  } else {
      int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (zarfiat_felez != "") {
          namad_nafelez = "(" + namad_nafelez + ")"
  }

  if (zarfiat_nafelez == 1) {
    zarfiat_nafelez = "";
  }

  if (zarfiat_felez == 1) {
    zarfiat_felez = "";
  }
  formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

  return formula, nam
}
function asidBiOxygene() {
}
function asidOxygeneDar() {
}
function namak() {
  felezat = {
      0: ["Li", "لیتیم", [''], "Lithium"],
      1: ["Na", "سدیم", [''], "Sodium"],
      2: ["K", "پتاسیم", [''], "Potassium"],
      3: ["Rb", "روبیدیم", [''], "Rubidium"],
      4: ["Cs", "سزیم", [''], "Cesium"],
      
      5: ["Be", "بریلیم", ['2'], "Beryllium"],
      6: ["Mg", "منیزیم", ['2'], "Magnesium"],
      7: ["Ca", "کلسیم", ['2'], "Calcium"],
      8: ["Sr", "استرانسیم", ['2'], "Strontium"],
      9: ["Ba", "باریم", ['2'], "Barium"],
      
      10: ["B", "بور", ['3'], "Boron"],
      11: ["Al", "آلومینیم", ['3'], "Aluminum"],
      
      12: ["Sn", "قلع", ['2', '4'], "Tin"],
      13: ["Pb", "سرب", ['2', '4'], "Lead"],
      
      14: ["Ag", "نقره", [''], "Silver"],
      15: ["Hg", "جیوه", ['', '2'], "Mercury"],
      16: ["Cu", "مس", ['', '2'], "Copper"],
      17: ["Zn", "روی", ['2'], "Zinc"],
      18: ["Cd", "کادمیم", ['2'], "Cadmium"],
      19: ["Mn", "منگنز", ['2', '3', '4', '6', '7'], "Manganese"],
      20: ["Fe", "آهن", ['2', '3'], "Iron"],
      21: ["Ni", "نیکل", ['2', '3'], "Nickel"],
      22: ["Co", "کبالت", ['2', '3'], "Cobalt"],
      23: ["Cr", "کروم", ['2', '3', '6'], "Chromium"],
      24: ["NH4", "آمونیوم", [''], "Amunium"],
  };

  nafelezat = {
      0: ["NO2", "نیتریت", ['']],
      1: ["NO3", "نیترات", ['']],
      2: ["SO3", "سولفیت", ['2']],
      3: ["SO4", "سولفات", ['2']],
      4: ["PO4", "فسفات", ['3']],
      5: ["CO3", "کربنات", ['2']],
      6: ["MnO4", "منگنات", ['2']],
      7: ["MnO4", "پرمنگنات", ['']],
      8: ["CrO4", "کرومات", ['2']],
      9: ["Cr2O7", "دی کرومات", ['2']],
      10: ["CN", "سیانید", ['']],
      11: ["O2", "پراکسید", ['2']],
  };
  const chosen_felez = felezat[randomNumber(0, 24)];
  const chosen_nafelez = nafelezat[randomNumber(0, 11)];

  let namad_felez = chosen_felez[0];
  let namad_nafelez = chosen_nafelez[0];

  const esm_felez = chosen_felez[1];
  const esm_nafelez = chosen_nafelez[1];

  const tedad_zarfiat_felez = chosen_felez[2].length;

  const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
  let zarfiat_felez = chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
  let zarfiat_nafelez = chosen_nafelez[2][0];

  let int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
      int_zarfiat_felez = 1;
  } else {
      int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  let int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
      int_zarfiat_nafelez = 1;
  } else {
      int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (chosen_felez[2].length != 1) {
      nam = esm_felez + "(" + romanize(parseInt(int_zarfiat_felez)) + ")" + " " + esm_nafelez;
  } else {
      nam = esm_felez + " " + esm_nafelez;
  }

  if (zarfiat_felez == zarfiat_nafelez) {
      zarfiat_felez = "";
      zarfiat_nafelez = "";
  }

  int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
      int_zarfiat_felez = 1;
  } else {
      int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
      int_zarfiat_nafelez = 1;
  } else {
      int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1) {
      zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
      zarfiat_nafelez = zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez)
  }

  if (hasNumber(namad_felez)) {
      if (zarfiat_nafelez != "") {
          namad_felez = "(" + namad_felez + ")"
      }
  }

  if (hasNumber(namad_nafelez) || namad_nafelez == 'CN') {
    if (zarfiat_felez != "") {
        namad_nafelez = "(" + namad_nafelez + ")"
    }
  }

  if (zarfiat_nafelez == 1) {
    zarfiat_nafelez = "";
  }

  if (zarfiat_felez == 1) {
    zarfiat_felez = "";
  }
  formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

  return formula, nam
}
function aaAsli() {
}
function aaVasete() {
}



// needed  secondary funs
function nextQuestion() {
  document.querySelector('.next-button-txt').innerHTML = 'Next question';
  numberof_asked_questions ++;

  if (chosen_topics.length == 0) {
    // document.getElementById('next-quest-button').data_bs_toggle = "modal";
    // document.getElementById('next-quest-button'). data_bs_target = "#staticBackdrop";
  }
  //gggggggggggggggggghhhhhhhhhhhhhhhhhhhhh

  current_topic = chosen_topics[randomNumber(0, chosen_topics.length - 1)];

  // run funs
  if (current_topic == "FwDoFlenafle") {
    fleNafle()
  } else if (current_topic == 'FwDoNalenafle') {
    nafleNafle()
  } else if (current_topic == 'FwSeHidroxide') {
    hidroxide()
  } else if (current_topic == 'FwSeAsidOxygeneDar') {
    asidOxygeneDar()
  } else if (current_topic == 'FWSeAsidBiOxygene') {
    asidBiOxygene()
  } else if (current_topic == 'FwSeNamak') {
    namak()
  } else if (current_topic == 'AaAsli') {
    aaAsli()
  } else if (current_topic == 'AaVasete') {
    aaVasete()
  }
  

  // prep q OR a
  let run = true; 
  while (run) {
    if (chosen_type_fw == 'Fbn') {
      current_question = formula;
      current_answer = nam;
      run = false;

    } else if (chosen_type_fw == 'Nbf') {
      current_question = nam;
      current_answer = formula;
      run = false;

    } else if (chosen_type_fw == 'Both') {
      if (fw_ask_q) {
        fw_ask_q = 0
        current_question = formula;
        current_answer = nam;
      } else {
        fw_ask_q = 1
        current_question = nam;
        current_answer = formula;
      }
      run = false;

    } else {
      document.querySelector('.option-hardo').checked = true;
      chosen_type_fw = 'Both'
    }
  }

  // box javab
  let cond_topic_is_fw = current_topic == "FwDoFlenafle" || current_topic == 'FwDoNalenafle' || current_topic == 'FwSeHidroxide' || current_topic == 'FwSeAsidOxygeneDar' || current_topic == 'FWSeAsidBiOxygene' || current_topic == 'FwSeNamak'

  if (cond_topic_is_fw) {
    if (current_question == formula) {
      txt = "نام ترکیب داده شده را بنویسید...";
    } else if (current_question == nam) {
      txt = "فرمول ترکیب داده شده را بنویسید...";
    }
  }


    
  // } else {
  //   if (chosen_type_aa == 'Abn') {
  //     txt = "عدد اتمی داده شده مربوط به چه عنصری است؟";
  //   } else if (chosen_type_aa = 'Nba') {
  //     txt = "عدد اتمی عنصر داده شد چیست؟";
  //   }
  // }

  document.querySelector('.javab-box').innerHTML = txt;

  document.querySelector('.soal').innerHTML = current_question;
}
function checkTheAnswerClicked () {
  const your_answer = document.querySelector('.js-your-answer-input').value;
  answerCheck(your_answer)
}
function answerCheck(your_answer) {
  if (your_answer == current_answer) {
    document.querySelector('.answer-check-result').innerHTML = 'درسته! آفرین!'
  } else {
    document.querySelector('.answer-check-result').innerHTML = 'اشتباهه! جواب درست: ' + current_answer
  }
}
  




