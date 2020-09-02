let toChange = document.getElementById("LentSidenav");
let toChangeSquer = document.getElementsByClassName("squer");
let runner = toChange.querySelectorAll("img");
let n = "";
let bigPicContainer = {
    0: ["SP_A0751.jpg","SP_A0753.jpg","SP_A0755.jpg","SP_A0756.jpg","SP_A0757.jpg","SP_A0758_allo.jpg","SP_A0759_allo.jpg","SP_A0760.jpg","SP_A0761_allo.jpg","SP_A0762_allo.jpg","SP_A0763_allo.jpg","SP_A0765.jpg","SP_A0767.jpg","SP_A0768.jpg","SP_A0769.jpg","SP_A0773_allo.jpg","SP_A0774.jpg","SP_A0776.jpg","SP_A0777.jpg","SP_A0778_allo.jpg","SP_A0779.jpg","SP_A0781_allo.jpg","SP_A0782_allo.jpg","SP_A0783.jpg","SP_A0787_allo.jpg"],
    1: ["357-DSCF4153.jpg","358-DSCF4154.jpg","359-DSCF4155_allo.jpg","360-DSCF4156.jpg","361-DSCF4157.jpg","362-DSCF4158.jpg","363-DSCF4161.jpg","365-DSCF4163.jpg","366-DSCF4164.jpg","367-DSCF4165.jpg"],
    2: ["044-DSCF5080_mirrorMe_allo.JPG","045-DSCF5089_mirrorMe.JPG","046-DSCF5096_mirrorMe.JPG","047-DSCF5097_mirrorMe.JPG","048-DSCF5101_mirrorMe_allo.JPG","120-DSCF5620_mirrorMe_allo.JPG","326-DSCF8572_mirrorMe.JPG","329-DSCF1504.JPG","341-DSCF1864_mirrorMe_allo.JPG","351-DSCF2830_mirrorMe_allo.JPG","353-DSCF2834_mirrorMe_allo.JPG","370-DSCF0218_mirrorMe.JPG","390-DSCF9229_mirrorMe.JPG","396-DSCF6418_mirrorMe_allo.JPG","480-DSCF7192_mirrorMe.JPG","532-DSCF2805_mirrorMe.JPG","609-DSC_1143_mirrorMe.JPG","613-DSC_0588_mirrorMe.JPG","615-DSC_0060.JPG","616-DSC_0061_allo.JPG","617-DSC_0063_mirrorMe_allo.JPG","618-DSC_0071_mirrorMe.JPG","621-DSC_0095_mirrorMe.JPG","639-DSC_0465_mirrorMe.JPG","641-DSC_0035 (4).JPG","652-DSC_1169_mirrorMe.JPG","662-DSC_0489_mirrorMe.JPG","667-DSC_0270.JPG","686-DSC_0132_mirrorMe_allo.JPG","693-DSC_0206_mirrorMe_allo.JPG","709-DSC_0332 (3)_mirrorMe.JPG","733-DSC_0602_mirrorMe_allo.JPG","736-DSC_0689_mirrorMe.JPG","741-DSC_0108_mirrorMe.JPG","742-DSC_0115_mirrorMe.JPG","744-DSC_0126_mirrorMe.JPG","758-DSC_0256_mirrorMe.JPG","779-DSC_0447 (3)_mirrorMe_allo.JPG","799-DSC_0185 (3)_mirrorMe.JPG","800-DSC_0189 (3)_mirrorMe.JPG","809-DSC_0250_mirrorMe_allo.JPG","810-DSC_0257_mirrorMe_allo.JPG"],
    3: ["032-DSCF4992_Big_Life_allo.JPG","036-DSCF5011_Big_Life_allo.JPG","129-DSCF3484_Big_Life_allo.JPG","138-DSCF3612_Big_Life.JPG","140-DSCF3653_Big_Life_allo.JPG","159-DSCF4440.JPG","164-DSCF4553_Big_Life_allo.JPG","176-DSCF1465_Big_Life.JPG","179-DSCF1498_Big_Life_allo.JPG","180-DSCF1503_allo.JPG","209-DSCF9672_Big_Life_allo.JPG","273-DSCF1212_squer_Life.JPG","275-DSCF1233.JPG","280-DSCF1281_squer_Life.JPG","296-DSCF5949_squer_Life.JPG","313-DSCF6311_Big_Life.JPG","394-DSCF6318_Big_Life.JPG","398-DSC_0269_Big_Life_allo.JPG","399-DSC_0351_Big_Life_allo.JPG","400-DSC_0459_Big_Life_allo.JPG","401-DSC_1084_Big_Life_allo.JPG","478-DSCF7047_Big_Life_allo.JPG","494-DSCF5158_Big_Life.JPG","543-DSCF6822_Big_Life.JPG","559-DSCF8556_Big_Life.JPG","635-DSC_0443_Big_Life_allo.JPG","642-DSC_0039 (4)_Big_Life_allo.JPG","646-DSC_0116_Big_Life.JPG","650-DSC_0592_Big_Life_allo.JPG","664-DSC_1066.JPG","687-DSC_0166_Big_Life.JPG","699-DSC_0244 (3)_allo.JPG","700-DSC_0247 (3)_Big_Life_allo.JPG","705-DSC_0291 (3)_Big_Life_allo.JPG","706-DSC_0301 (3)_Big_Life_allo.JPG","707-DSC_0313 (3)_Big_Life_allo.JPG","711-DSC_0346 (3)_Big_Life_allo.JPG","712-DSC_0362_Big_Life_allo.JPG","717-DSC_0410_Big_Life_allo.JPG","722-DSC_0434_Big_Life_allo.JPG","770-DSC_0296.JPG","777-DSC_0385 (3)_Big_Life_allo.JPG","788-DSC_0502 (3)_Big_Life_allo.JPG"],
    4: ["334-DSCF1627_allo.jpg","355-DSCF2974.jpg","356-DSCF3246_allo.jpg","496-DSCF0018_squer_Life.jpg","498-DSCF0304_squer_Life.jpg","560-DSCF8602.jpg","565-DSCF8718.jpg","566-DSCF8768.jpg","567-DSCF8782.jpg","568-DSCF8800.jpg","570-DSCF8821.jpg","571-DSCF8834.jpg","572-DSCF8840.jpg","573-DSCF8841.jpg","575-DSCF8858.jpg","578-DSCF8867_allo.jpg","579-DSCF8873_allo.jpg","580-DSCF8878.jpg","654-DSC_0164_object.jpg"],
    5: ["062-DSCF5910.jpg","069-DSCF5973_hand.jpg","070-DSCF5979_hand_allo.jpg","071-DSCF5981_hand_allo.jpg","072-DSCF5983_hand_allo.jpg","075-DSCF6040_hand.jpg","077-DSCF6148_hand.jpg","078-DSCF6192_hand.jpg","080-DSCF8143_hand.jpg","082-DSCF8273_hand.jpg","116-DSCF9269.jpg","117-DSCF5543_hand.jpg","236-DSCF0977.jpg","283-DSCF1341.jpg","311-DSCF6070_squer_Life.jpg","470-DSCF7001_hand.jpg","473-DSCF7010_hand.jpg","484-DSCF7276.jpg","485-DSCF7280_hand.jpg","516-DSCF9927_hand.jpg","517-DSCF9946.jpg","591-DSCF5771_hand.jpg","595-DSCF5798_hand.jpg","597-DSCF5800_hand_allo.jpg","599-DSCF5806_hand.jpg","600-DSCF5812.jpg","660-DSC_0016 (3)_hand.jpg","680-DSC_0355_hand.jpg"],
    6: ["016-DSCF1369_object.JPG","088-DSCF8711_object.JPG","112-DSCF9236_object.JPG","242-DSCF0999_object.JPG","258-DSCF1084_view.JPG","286-DSCF4893_object.JPG","288-DSCF4944_view.JPG","328-DSCF8583_object.JPG","495-DSCF0012_object.JPG","497-DSCF0023_object.JPG","506-DSCF9849_object.JPG","511-DSCF9888_object.JPG","518-DSCF9958_object.JPG","519-DSCF9959_object.JPG"],
    7: ["085-DSCF8675_view.JPG","086-DSCF8703.JPG","111-DSCF9235.JPG","168-DSCF8497_view.JPG","270-DSCF1171_view.JPG","309-DSCF6065_view.JPG","315-DSCF6525_view.JPG","317-DSCF6571_view.JPG","318-DSCF6572_view.JPG","402-DSCF1436_view.JPG","499-DSCF9792_view.JPG","503-DSCF9839_view.JPG","505-DSCF9848_view.JPG","507-DSCF9857_view.JPG","508-DSCF9878_view.JPG","514-DSCF9906_view.JPG","521-DSCF9967_view.JPG","820-DSCF6627_view.JPG","821-DSCF6628.JPG","822-DSCF6631.JPG","repet 2-fin.JPG"],
    8: ["089-DSCF8752_make.JPG","090-DSCF8770_make.JPG","091-DSCF8779_make.JPG","092-DSCF8789_make.JPG","093-DSCF8801_make.JPG","094-DSCF8817_make.JPG","095-DSCF8825_make.JPG","096-DSCF8837_make.JPG","097-DSCF8846_make.JPG","101-DSCF8952_make.JPG","102-DSCF9025_make.JPG","103-DSCF9083_make.JPG","104-DSCF9097_make.JPG","108-DSCF9226_make.JPG","427-DSCF4778_make.JPG","433-DSCF4798_make.JPG","434-DSCF4799_make.JPG","435-DSCF4800_make.JPG","436-DSCF4803_make.JPG","437-DSCF4805_make.JPG","438-DSCF4814_make.JPG","439-DSCF4816_make.JPG","440-DSCF4823_make.JPG","441-DSCF4824_make.JPG","523-DSCF9979_make.JPG","524-DSCF9990_make.JPG","536-DSCF6715_make.JPG","537-DSCF6725_make.JPG","538-DSCF6728_make.JPG","539-DSCF6738_make.JPG","540-DSCF6748_make.JPG","541-DSCF6759_make.JPG","542-DSCF6764_make.JPG"],
    9: ["039-DSCF5021_allo.jpg","040-DSCF5029.jpg","154-DSCF3844_spy.jpg","156-DSCF3872_spy_allo.jpg","172-DSCF0195_spy_allo.jpg","177-DSCF1469_spy.jpg","197-DSCF7929_spy_allo.jpg","199-DSCF7960_spy_allo.jpg","201-DSCF7981_spy_allo.jpg","218-DSCF9738_spy_allo.jpg","346-DSCF2752_view_allo.jpg","348-DSCF2759_view.jpg","380-DSCF1327_spy.jpg","426-DSCF4769_spy_allo.jpg","449-DSCF8150_spy_allo.jpg","610-DSC_0531_spy.jpg","637-DSC_0457_spy_allo.jpg","643-DSC_0044 (4)_spy.jpg","651-DSC_0602_allo.jpg","731-DSC_0555_spy.jpg","735-DSC_0676_spy_allo.jpg","771-DSC_0298_spy.jpg","774-DSC_0332_spy_allo.jpg","775-DSC_0337_spy_allo.jpg","776-DSC_0362 (3)_spy_allo.jpg","785-DSC_0483 (3)_spy.jpg","798-DSC_0171 (3)_spy.jpg"],
    10:["053-DSCF5207_allo.jpg","056-DSCF5418_view.jpg","137-DSCF3608_view_allo.jpg","151-DSCF3826_view.jpg","162-DSCF4523_view_allo.jpg","375-DSCF1009_view.jpg","395-DSCF6343_view_allo.jpg","447-DSCF8139_view.jpg","455-DSCF8230_view_allo.jpg","457-DSCF6911_view_allo.jpg","459-DSCF6920_view.jpg","493-DSCF5156_view.jpg","525-DSCF2042_view.jpg","531-DSCF2368_view.jpg","545-DSCF6970_view.jpg","582-DSCF8896_allo.jpg","604-DSCF5862_view_allo.jpg","606-DSC_1067_view.jpg","619-DSC_0087_view.jpg","631-DSC_0159_view.jpg","633-DSC_0194_view.jpg","663-DSC_1046_view.jpg","665-DSC_1093_view_allo.jpg","698-DSC_0242_view_allo.jpg","710-DSC_0340 (3)_view_allo.jpg","724-DSC_0456_view_allo.jpg","754-DSC_0235_view_allo.jpg","772-DSC_0299_view_allo.jpg","778-DSC_0437 (3)_view.jpg","812-DSC_0071 (2)_view_allo.jpg","814-DSC_0087 (2)_view_allo.jpg"],
    11:["003-DSCF6604_allo.jpg","043-DSCF5069_object.jpg","049-DSCF5103_object.jpg","050-DSCF5119_object.jpg","054-DSCF5328_object_allo.jpg","084-DSCF8297_object.jpg","119-DSCF5611.jpg","169-DSCF0078_object.jpg","173-DSCF0302_object.jpg","221-DSCF9749_object.jpg","335-DSCF1670_object.jpg","352-DSCF2833_object.jpg","373-DSCF0913_object.jpg","392-DSCF9279_object.jpg","444-DSCF8102_object.jpg","445-DSCF8111_object.jpg","446-DSCF8134_object.jpg","452-DSCF8213_object.jpg","454-DSCF8226_object.jpg","456-DSCF6891_object.jpg","461-DSCF6933_object_allo.jpg","464-DSCF6955_object_allo.jpg","612-DSC_0583_object_allo.jpg","614-DSC_0037_object.jpg","620-DSC_0093_object_allo.jpg","629-DSC_0138_object_allo.jpg","653-DSC_0080_object.jpg","666-DSC_0266_object.jpg","684-DSC_0065 (3)_object.jpg","704-DSC_0282 (3)_object_allo.jpg","734-DSC_0625_object_allo.jpg"],
    12:["front.jpg","Kollázsok4.jpg","Kollázsok5.jpg","smoke face tre.jpg","smoke face tre1.jpg","smoke face tre2.jpg","zero 2-fin.jpg"]
};

let foldernames = [
    "See_what_I_see_00",
    "bluredinside_01",
    "just_hiding_mirror_02",
    "big_life_03",
    "forgotten_life_living_past_04",
    "rincles_of_time_living_past_05",
    "objecting_world_squer_object_06",
    "frozen_time_squer_view_07",
    "can_you_remeber_squer_08",
    "widows_of_us_09",
    "Standing_there_view_10",
    "Meaningfull findings_object_11",
    "catched_moments_12"
];

let textContainer = [
    "See_what_I_see_00",
    "bluredinside_01",
    "just_hiding_mirror_02",
    "big_life_03",
    "forgotten_life_living_past_04",
    "You can look ate my eyes and see who i am. You can look at my hands and see what i did. Time is there. No end or beggining. If you learn to read it its like a book with thousand of pages. REmeberes every day and every moment.",
    "objecting_world_squer_object_06",
    "frozen_time_squer_view_07",
    "can_you_remeber_squer_08",
    "widows_of_us_09",
    "Standing_there_view_10",
    "Meaningfull findings_object_11",
    "catched_moments_12"
];

let titleNamesContanier = {
    9 : "Windows of Us",
0 :"See what I see",
12 :"Catched in action",
10 :"Standing There",
3:"Big Life",
11:"Meaningfull findings",
4:"Forgotten life",
5:"wrincles of Time",
5555:"Viatent Life" ,  
7:"Frozen Time",
4444:"Dropped Down",
8:"Can you Remember?",
6:"Objecting World",
2222:"Dancing variations",
1:"Blured Inside " ,
2:"Just hiding"
    
};

function openPicmap(n) { 
    document.getElementById('myModal').style.display="none";
    let text = document.getElementById("textmod");
    text.style.display = "flex";
    text.children[0].innerHTML = textContainer[n];
    document.getElementById("photoTitle").innerHTML = titleNamesContanier[n];
    
    
       if ( bigPicContainer[n].length <= runner.length ) {
                let z= bigPicContainer[n].length;   
                for (let k = 0; k < z; k++) {
                    runner[k].src = "./img/small/" + foldernames[n] + "/" + bigPicContainer[n][k];
                    let chekc = bigPicContainer[n][k].includes("allo");
                    if (chekc == true ) {runner[k].setAttribute("class", "allo");}
                    else {runner[k].setAttribute("class", "fekvo");}
                    toChangeSquer[k].style.display = "inline-block";                   
                }
                for (let m = z; m < runner.length; m++) {
                   /* runner[m].src = "./img/small/" + foldernames[n] + "/" + bigPicContainer[n][m-z];*/
                    toChangeSquer[m].style.display = "none";
                }
        }
        else {
           /* let z= toChange.length;  
            for (let k = 0; k < z; k++) {
                runner[k].src = "./img/small/" + foldernames[n] + "/" + bigPicContainer[n][k];
            }
                here is to create the div squer if its not existing already
            for (let m = z; m < bigPicContainer[n].length; m++) {
                const element = array m];
                
            }
*/  
        console.log("helloooooo");
        console.log(bigPicContainer[n].length);
        console.log(runner.length);
        }


}


