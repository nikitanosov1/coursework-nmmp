(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{69373:function(e,t,r){Promise.resolve().then(r.bind(r,76944))},76944:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var a=r(57437),l=r(59671),n=r.n(l),o=r(42498),s=r(2582),i=r(40182),c=r(45421),m=r(43226),u=r(98595);let h=(0,u.Z)({palette:{mode:"light",background:{paper:"#f2f2f2"},text:{primary:"#11111"}}}),p=(0,u.Z)({palette:{mode:"dark",background:{paper:"#222"},text:{primary:"#fff"}}});var d=r(65673);let selectThemeModule=e=>e.theme,selectIsDarkTheme=e=>selectThemeModule(e).darkTheme;var f=r(3198),g=r(2972),x=r(23300);let SchemeUtil=class SchemeUtil{};SchemeUtil.R=2,SchemeUtil.T=300,SchemeUtil.kT=.065,SchemeUtil.c=1.84,SchemeUtil.alpha=.002,SchemeUtil.beta=.004,SchemeUtil.l=.8,SchemeUtil.u0=0,SchemeUtil.valI=e=>0<=e&&e<=.2?300:0,SchemeUtil.h_t=e=>SchemeUtil.T/e,SchemeUtil.h_r=e=>SchemeUtil.R/e,SchemeUtil.createRAxis=e=>{let t=[];for(let r=0;r<e+1;++r)t.push(SchemeUtil.h_r(e)*r);return t};let I=[0,3.8317059702075125,7.015586669815619,10.173468135062722,13.323691936314223,16.470630050877634,19.615858510468243,22.760084380592772,25.903672087618382,29.046828534916855,32.189679910974405,35.33230755008387,38.474766234771614,41.61709421281445,44.75931899765282,47.90146088718544,51.04353518357151,54.18555364106132,57.32752543790101,60.46945784534749,63.61135669848123,66.75322673409849,69.89507183749578,73.03689522557384,76.17869958464146,79.3204871754763,82.46225991437356,85.60401943635023,88.7457671449263,91.88750425169499,95.0292318080447,98.17095073079078,101.31266182303874,104.45436579128275,107.59606325950917,110.73775478089922,113.87944084759499,117.02112189889243,120.16279832814901,123.30447048863572,126.44613869851659,129.587803245104,132.72946438850963,135.871122364789,139.0127773886597,142.15442965585902,145.2960793451959,148.43772662034223,151.57937163140144,154.72101451628595,157.86265540193028,161.004294405362,164.14593163464963,167.2875671897441,170.42920116322662,173.57083364097593,176.71246470276375,179.8540944227884,182.99572287015297,186.1373501092955,189.278976200376,192.4206011996257,195.56222515966257,198.70384812977704,201.84547015619088,204.98709128229234,208.12871154885005,211.27033099420777,214.41194965446198,217.5535675636242,220.69518475376935,223.83680125517174,226.97841709642947,230.1200323045791,233.26164690520062,236.4032609225143,239.54487437946986,242.6864872978287,245.8280996982398,248.96971160030992,252.11132302266859,255.25293398302813,258.3945444982395,261.53615458434405,264.6777642566215,267.81937352963456,270.9609824172707,274.1025909327807,277.2441990888146,280.3858068974556,283.5274143702514,286.6690215182434,289.8106283519944,292.9522348816139,296.09384111678247,299.23544706677416,302.37705274047755,305.5186581464156,308.6602632927644,311.8018681873705,314.94347283776716,318.0850772511904,321.2266814345928,324.36828539465785,327.5098891378125,330.6514926702394,333.7930959978886,336.934699126488,340.0763020615541,343.2179048084013,346.35950737215103,349.50110975774095,352.6427119699324,355.7843140133188,358.9259158923327,362.06751761125264,365.2091191742101,368.3507205851957,371.4923218480648,374.6339229665437,377.77552394423464,380.91712478462097,384.05872549107215,387.2003260668482,390.3419265151044,393.483526838895,396.62512704117756,399.7667271248168,402.90832709258797,406.04992694718044,409.191526691201,412.333126327177,415.4747258575594,418.6163252847255,421.7579246109819,424.8995238385667,428.04112296965263,431.1827220063489,434.3243209507038,437.46591980470663,440.60751857029015,443.74911724933224,446.89071584365803,450.03231435504165,453.17391278520813,456.3155111358349,459.45710940855355,462.59870760495136,465.74030572657267,468.88190377492066,472.02350175145824,475.1650996576098,478.3066974947622,481.4482952642663,484.5898929674376,487.73149060555806,490.8730881798765,494.0146856916103,497.1562831419457,500.29788053203947,503.4394778630194,506.5810751359852,509.72267235200957,512.8642695121389,516.0058666173942,519.1474636687715,522.2890606672431,525.4306576137582,528.5722545092428,531.7138513546017,534.8554481507182,537.9970448984548,541.1386415986541,544.2802382521394,547.4218348597149,550.5634314221664,553.7050279402622,556.8466244147527,559.9882208463721,563.1298172358377,566.2714135838512,569.4130098910987,572.5546061582512,575.6962023859651,578.8377985748825,581.9793947256318,585.1209908388278,588.2625869150719,591.4041829549533,594.5457789590482,597.687374927921,600.8289708621243,603.9705667621989,607.1121626286748,610.2537584620707,613.395354262895,616.5369500316457,619.6785457688104,622.8201414748671,625.9617371502844,629.103332795521,632.2449284110271,635.3865239972436,638.5281195546027,641.6697150835282,644.811310584436,647.9529060577335,651.0945015038202,654.2360969230882,657.3776923159221,660.5192876826989,663.6608830237888,666.8024783395548,669.944073630353,673.0856688965334,676.2272641384387,679.368859356406,682.5104545507655,685.652049721842,688.793644869954,691.9352399954142,695.07683509853,698.2184301796026,701.3600252389285,704.5016202767986,707.6432152934987,710.7848102893093,713.9264052645063,717.0680002193608,720.2095951541387,723.3511900691018,726.492784964507,729.634379840607,732.7759746976502,735.9175695358806,739.0591643555381,742.2007591568585,745.3423539400735,748.4839487054115,751.6255434530964,754.7671381833486,757.908732896385,761.0503275924187,764.1919222716595,767.3335169343136,770.4751115805839,773.6167062106699,776.7583008247682,779.8998954230718,783.0414900057709,786.1830845730526,789.3246791251008,792.4662736620969,795.6078681842192,798.749462691643,801.8910571845412,805.0326516630838,808.1742461274383,811.3158405777694,814.4574350142394,817.5990294370082,820.740623846233,823.8822182420688,827.0238126246683,830.1654069941815,833.3070013507565,836.4485956945391,839.5901900256731,842.7317843442996,845.8733786505583,849.0149729445862,852.1565672265189,855.2981614964893,858.439755754629,861.5813500010673,864.7229442359318,867.8645384593482,871.0061326714402,874.1477268723302,877.2893210621382,880.4309152409832,883.5725094089818,886.7141035662494,889.8556977128998,892.9972918490449,896.1388859747952,899.2804800902596,902.4220741955457,905.5636682907593,908.705262376005,911.8468564513855,914.9884505170028,918.1300445729568,921.2716386193466,924.4132326562697,927.5548266838221,930.6964207020987,933.8380147111934,936.9796087111984,940.1212027022048,943.2627966843023,946.40439065758,949.5459846221253,952.6875785780245,955.829172525363,958.9707664642248,962.1123603946929,965.2539543168494,968.3955482307753,971.5371421365501,974.6787360342528,977.8203299239613,980.9619238057522,984.1035176797016,987.245111545884,990.3867054043736,993.5282992552433,996.669893098565,999.8114869344101,1002.9530807628488,1006.0946745839503,1009.2362683977834,1012.3778622044155,1015.5194560039135,1018.6610497963436,1021.8026435817708,1024.9442373602594,1028.0858311318732,1031.227424896675,1034.369018654727,1037.51061240609,1040.6522061508254,1043.7937998889922,1046.93539362065,1050.076987345857,1053.2185810646715,1056.3601747771497,1059.5017684833485,1062.6433621833235,1065.7849558771295,1068.9265495648212,1072.0681432464523,1075.2097369220758,1078.3513305917443,1081.4929242555095,1084.634517913423,1087.7761115655353,1090.9177052118964,1094.0592988525561,1097.2008924875636,1100.3424861169667,1103.4840797408137,1106.6256733591517,1109.7672669720275,1112.9088605794875,1116.0504541815776,1119.1920477783424,1122.3336413698273,1125.475234956076,1128.6168285371327,1131.7584221130403,1134.9000156838415,1138.0416092495789,1141.183202810294,1144.3247963660283,1147.466389916823,1150.607983462718,1153.7495770037538,1156.8911705399696,1160.032764071405,1163.1743575980981,1166.315951120088,1169.457544637412,1172.599138150108,1175.7407316582128,1178.8823251617632,1182.0239186607957,1185.1655121553458,1188.3071056454496,1191.448699131142,1194.5902926124575,1197.731886089431,1200.8734795620965,1204.0150730304874,1207.1566664946374,1210.2982599545796,1213.4398534103464,1216.58144686197,1219.7230403094832,1222.8646337529167,1226.0062271923025,1229.1478206276715,1232.2894140590543,1235.4310074864813,1238.5726009099828,1241.7141943295885,1244.855787745328,1247.99738115723,1251.138974565324,1254.2805679696385,1257.4221613702014,1260.5637547670412,1263.7053481601856,1266.8469415496622,1269.988534935498,1273.1301283177197,1276.2717216963545,1279.4133150714285,1282.554908442968,1285.696501810999,1288.838095175547,1291.9796885366375,1295.1212818942956,1298.2628752485462,1301.404468599414,1304.5460619469234,1307.6876552910987,1310.8292486319638,1313.9708419695426,1317.1124353038583,1320.2540286349345,1323.395621962794,1326.53721528746,1329.6788086089548,1332.820401927301,1335.9619952425207,1339.1035885546362,1342.245181863669,1345.3867751696405,1348.5283684725725,1351.6699617724862,1354.8115550694024,1357.953148363342,1361.0947416543254,1364.2363349423733,1367.377928227506,1370.519521509743,1373.6611147891049,1376.802708065611,1379.9443013392804,1383.0858946101332,1386.2274878781882,1389.3690811434644,1392.5106744059806,1395.6522676657553,1398.7938609228072,1401.9354541771545,1405.0770474288154,1408.2186406778076,1411.3602339241493,1414.501827167858,1417.6434204089512,1420.7850136474465,1423.9266068833606,1427.0682001167108,1430.209793347514,1433.351386575787,1436.4929798015464,1439.6345730248088,1442.77616624559,1445.9177594639066,1449.0593526797745,1452.2009458932096,1455.3425391042276,1458.4841323128444,1461.625725519075,1464.7673187229352,1467.9089119244402,1471.0505051236046,1474.1920983204438,1477.3336915149725,1480.4752847072057,1483.6168778971576,1486.7584710848425,1489.9000642702754,1493.04165745347,1496.1832506344404,1499.324843813201,1502.466436989765,1505.6080301641468,1508.7496233363597,1511.8912165064173,1515.0328096743328,1518.17440284012,1521.3159960037917,1524.457589165361,1527.5991823248407,1530.7407754822443,1533.8823686375838,1537.0239617908724,1540.1655549421225,1543.3071480913463,1546.4487412385565,1549.5903343837651,1552.7319275269845,1555.8735206682265,1559.0151138075032,1562.1567069448263,1565.2983000802078,1568.4398932136592,1571.581486345192,1574.723079474818,1577.8646726025481,1581.006265728394,1584.147858852367,1587.289451974478,1590.4310450947378,1593.5726382131577,1596.7142313297486,1599.855824444521,1602.9974175574857,1606.1390106686533,1609.2806037780344,1612.4221968856396,1615.5637899914789,1618.7053830955626,1621.8469761979013,1624.9885692985047,1628.1301623973832,1631.2717554945464,1634.4133485900043,1637.5549416837669,1640.696534775844,1643.8381278662448,1646.9797209549793,1650.1213140420568,1653.2629071274869,1656.404500211279,1659.5460932934423,1662.687686373986,1665.8292794529193,1668.9708725302512,1672.112465605991,1675.2540586801474,1678.3956517527295,1681.537244823746,1684.6788378932056,1687.820430961117,1690.962024027489,1694.1036170923298,1697.2452101556485,1700.386803217453,1703.5283962777519,1706.6699893365535,1709.811582393866,1712.9531754496977,1716.0947685040564,1719.236361556951,1722.3779546083883,1725.5195476583772,1728.6611407069254,1731.8027337540404,1734.9443267997306,1738.085919844003,1741.2275128868657,1744.3691059283265,1747.5106989683925,1750.6522920070713,1753.7938850443707,1756.9354780802978,1760.0770711148598,1763.2186641480646,1766.3602571799188,1769.50185021043,1772.643443239605,1775.7850362674512,1778.9266292939756,1782.068222319185,1785.2098153430863,1788.351408365687,1791.493001386993,1794.634594407012,1797.77618742575,1800.9177804432143,1804.059373459411,1807.2009664743473,1810.3425594880293,1813.4841525004638,1816.6257455116572,1819.7673385216158,1822.908931530346,1826.0505245378542,1829.1921175441469,1832.33371054923,1835.47530355311,1838.616896555793,1841.7584895572847,1844.9000825575918,1848.04167555672,1851.1832685546756,1854.3248615514642,1857.4664545470919,1860.6080475415645,1863.749640534888,1866.891233527068,1870.0328265181104,1873.174419508021,1876.3160124968051,1879.4576054844688,1882.5991984710174,1885.7407914564567,1888.882384440792,1892.0239774240292,1895.1655704061734,1898.30716338723,1901.4487563672046,1904.5903493461024,1907.731942323929,1910.8735353006891,1914.0151282763886,1917.1567212510324,1920.2983142246258,1923.4399071971736,1926.5815001686813,1929.723093139154,1932.8646861085965,1936.006279077014,1939.147872044411,1942.2894650107933,1945.4310579761652,1948.5726509405317,1951.714243903898,1954.8558368662684,1957.997429827648,1961.1390227880413,1964.2806157474533,1967.4222087058888,1970.5638016633523,1973.7053946198482,1976.8469875753815,1979.9885805299566,1983.1301734835781,1986.2717664362506,1989.4133593879783,1992.554952338766,1995.696545288618,1998.8381382375387,2001.9797311855325,2005.1213241326038,2008.2629170787568,2011.404510023996,2014.5461029683256,2017.6876959117496,2020.8292888542726,2023.9708817958988,2027.112474736632,2030.2540676764766,2033.3956606154368,2036.5372535535164,2039.6788464907197,2042.8204394270506,2045.9620323625134,2049.1036252971116,2052.2452182308493,2055.386811163731,2058.5284040957604,2061.6699970269406,2064.8115899572767,2067.9531828867716,2071.09477581543,2074.2363687432544,2077.3779616702495,2080.5195545964193,2083.661147521767,2086.8027404462964,2089.9443333700115,2093.0859262929152,2096.227519215012,2099.3691121363054,2102.5107050567985,2105.652297976495,2108.793890895399,2111.9354838135137,2115.0770767308422,2118.2186696473887,2121.360262563156,2124.501855478148,2127.6434483923686,2130.78504130582,2133.9266342185065,2137.0682271304313,2140.2098200415976,2143.351412952009,2146.4930058616683,2149.6345987705795,2152.7761916787454,2155.917784586169,2159.0593774928543,2162.200970398804,2165.3425633040215,2168.48415620851,2171.6257491122724,2174.767342015312,2177.908934917632,2181.0505278192354,2184.1921207201253,2187.3337136203054,2190.4753065197774,2193.6168994185455,2196.7584923166123,2199.9000852139807,2203.041678110654,2206.183271006635,2209.3248639019266,2212.466456796532,2215.6080496904533,2218.7496425836944,2221.891235476258,2225.0328283681465,2228.174421259363,2231.3160141499106,2234.4576070397916,2237.5991999290095,2240.740792817566,2243.8823857054654,2247.023978592709,2250.1655714793005,2253.3071643652424,2256.448757250537,2259.5903501351872,2262.731943019196,2265.873535902566,2269.0151287852996,2272.1567216673993,2275.2983145488683,2278.4399074297085,2281.5815003099233,2284.7230931895147,2287.8646860684853,2291.006278946838,2294.147871824575,2297.2894647016988,2300.4310575782124,2303.5726504541176,2306.7142433294175,2309.8558362041144,2312.9974290782106,2316.1390219517084,2319.2806148246104,2322.4222076969195,2325.5638005686374,2328.705393439767,2331.84698631031,2334.9885791802694,2338.130172049647,2341.271764918446,2344.4133577866683,2347.5549506543157,2350.696543521391,2353.8381363878966,2356.9797292538346,2360.1213221192074,2363.2629149840172,2366.404507848266,2369.546100711956,2372.68769357509,2375.82928643767,2378.9708792996976,2382.1124721611754,2385.254065022106,2388.3956578824905,2391.537250742332,2394.6788436016323,2397.820436460394,2400.962029318618,2404.103622176308,2407.245215033465,2410.386807890091,2413.5284007461887,2416.66999360176,2419.8115864568063,2422.9531793113306,2426.0947721653347,2429.23636501882,2432.3779578717895,2435.5195507242443,2438.6611435761865,2441.8027364276186,2444.944329278542,2448.0859221289593,2451.227514978872,2454.369107828282,2457.5107006771914,2460.652293525602,2463.7938863735158,2466.9354792209347,2470.0770720678606,2473.218664914295,2476.3602577602405,2479.5018506056986,2482.6434434506705,2485.7850362951594,2488.926629139166,2492.0682219826926,2495.209814825741,2498.3514076683127,2501.4930005104097,2504.634593352034,2507.776186193187,2510.917779033871,2514.059371874087,2517.2009647138375,2520.3425575531237,2523.4841503919474,2526.625743230311,2529.767336068215,2532.9089289056624,2536.050521742654,2539.1921145791916,2542.3337074152773,2545.4753002509124,2548.6168930860986,2551.7584859208378,2554.9000787551317,2558.0416715889814,2561.183264422389,2564.324857255356,2567.4664500878844,2570.608042919975,2573.7496357516297,2576.8912285828505,2580.032821413639,2583.174414243996,2586.3160070739236,2589.4575999034237,2592.599192732497,2595.740785561146,2598.8823783893713,2602.023971217175,2605.165564044559,2608.307156871524,2611.448749698072,2614.590342524204,2617.731935349922,2620.8735281752274,2624.015121000122,2627.1567138246064,2630.2983066486827,2633.4398994723524,2636.5814922956165,2639.723085118477,2642.864677940935,2646.006270762992,2649.1478635846493,2652.2894564059084,2655.431049226771,2658.5726420472383,2661.7142348673115,2664.855827686992,2667.9974205062817,2671.1390133251816,2674.280606143693,2677.4221989618172,2680.563791779556,2683.705384596911,2686.846977413882,2689.988570230472,2693.1301630466814,2696.2717558625122,2699.413348677965,2702.5549414930415,2705.696534307743,2708.838127122071,2711.979719936027,2715.121312749611,2718.262905562826,2721.4044983756717,2724.5460911881505,2727.6876840002633,2730.8292768120114,2733.970869623396,2737.1124624344184,2740.2540552450796,2743.3956480553816,2746.5372408653247,2749.6788336749105,2752.82042648414,2755.962019293015,2759.1036121015363,2762.2452049097055,2765.386797717523,2768.5283905249908,2771.6699833321095,2774.811576138881,2777.9531689453056,2781.0947617513852,2784.23635455712,2787.3779473625127,2790.5195401675633,2793.661132972273,2796.8027257766435,2799.944318580676,2803.0859113843703,2806.227504187729,2809.369096990753,2812.510689793443,2815.6522825958004,2818.793875397826,2821.935468199521,2825.0770610008867,2828.218653801924,2831.3602466026346,2834.5018394030185,2837.6434322030777,2840.7850250028127,2843.926617802225,2847.068210601315,2850.209803400085,2853.351396198535,2856.492988996666,2859.63458179448,2862.776174591977,2865.917767389159,2869.059360186026,2872.20095298258,2875.342545778821,2878.4841385747513,2881.625731370371,2884.767324165681,2887.908916960683,2891.050509755378,2894.1921025497663,2897.3336953438493,2900.475288137628,2903.616880931103,2906.758473724276,2909.9000665171475,2913.0416593097184,2916.18325210199,2919.3248448939635,2922.466437685639,2925.608030477018,2928.7496232681015,2931.89121605889,2935.032808849385,2938.174401639588,2941.315994429498,2944.4575872191176,2947.5991800084475,2950.7407727974883,2953.8823655862407,2957.0239583747057,2960.165551162885,2963.3071439507785,2966.4487367383877,2969.590329525713,2972.731922312756,2975.8735150995176,2979.0151078859976,2982.156700672198,2985.298293458119,2988.439886243762,2991.581479029128,2994.723071814217,2997.86466459903,3001.0062573835694,3004.147850167834,3007.289442951826,3010.4310357355457,3013.572628518994,3016.714221302172,3019.8558140850805,3022.9974068677197,3026.1389996500916,3029.280592432196,3032.422185214034,3035.563777995607,3038.705370776915,3041.846963557959,3044.9885563387406,3048.13014911926,3051.2717418995176,3054.4133346795147,3057.5549274592518,3060.6965202387305,3063.8381130179505,3066.9797057969135,3070.1212985756197,3073.2628913540702,3076.4044841322657,3079.546076910207,3082.687669687895,3085.82926246533,3088.970855242513,3092.1124480194453,3095.254040796127,3098.3956335725593,3101.5372263487425,3104.6788191246774,3107.8204119003653,3110.9620046758064,3114.103597451002,3117.2451902259522,3120.386783000658,3123.52837577512,3126.6699685493395,3129.8115613233167,3132.9531540970524,3136.094746870547,3139.2363396438022,3142.377932416818],useAnalyticalSolutionGraph=e=>{let{I:t,K:r,k:a}=e,{R:l,kT:n,c:o,alpha:s,beta:i,l:c,h_t:m,createRAxis:u}=SchemeUtil,J_n=(e,t)=>(0,x.besselj)(e,t),λ=e=>-Math.pow(I[e],2)*n/Math.pow(l,2)-2*s/c,B=e=>0===e?l>.2?12*i/Math.pow(l,2):300*i:120*i*J_n(.2*I[e]/l,1)/(l*Math.pow(J_n(I[e],0),2)*I[e]),U=(e,t)=>{let r=0;for(let a=0;a<=200;a++){let n=λ(a);r+=B(a)*(Math.pow(Math.E,n*t/o)-1)/n*J_n(I[a]*e/l,0)}return r},h=u(t),p=[...h].map(e=>({r:e}));for(let e of p){let t=e.r,l=m(r)*a;e["Аналитическое решение"]=U(t,l)}return p},useMergeTwoGraphsByField=(e,t,r)=>{let a=[],l=Math.min(t.length,r.length);for(let n=0;n<l;n++){let l={...t[n],...r[n],[e]:t[n][e]};a.push(l)}return a};var y=r(79892);let useExplicitSchemaSolutionGraph=e=>{let{I:t,K:r,k:a}=e,l="Явная схема",{R:n,kT:o,c:s,alpha:i,beta:c,l:m,u0:u,h_t:h,h_r:p,valI:d,createRAxis:f}=SchemeUtil,mu=e=>o*h(r)/(2*s*e*p(t)),gamma=()=>o*h(r)/(s*Math.pow(p(t),2)),eps=()=>2*i*h(r)/(s*m),g=performance.now(),x=f(t),I=[...x].map(e=>({r:e})),y=Array(r+1).fill(0).map(()=>Array(t+1).fill(0));y[0]=Array(t+1).fill(0);for(let e=0;e<r;e++){y[e+1]=Array(t+1).fill(0),y[e+1][0]+=y[e][0]*(1-4*gamma()-eps()),y[e+1][0]+=4*y[e][1]*gamma(),y[e+1][0]+=c*d(0)*h(r)/s;for(let a=1;a<t;a++){let l=p(t)*a;y[e+1][a]+=y[e][a+1]*(gamma()+mu(l)),y[e+1][a]+=y[e][a]*(1-2*gamma()-eps()),y[e+1][a]+=y[e][a-1]*(gamma()-mu(l)),y[e+1][a]+=c*d(l)*h(r)/s}y[e+1][t]=y[e+1][t-1]}for(let e=0;e<r+1;e++)for(let r=0;r<t+1;r++)y[e][r]+=u;for(let e=0;e<t+1;e++)I[e]["".concat(l)]=y[a][e];let S=performance.now();return{schemaSolutionGraph:I,SCHEMA_LABEL:l,workTime:S-g}},useImplicitSchemaSolutionGraph=e=>{let{I:t,K:r,k:a}=e,l="Неявная схема",{R:n,kT:o,c:s,alpha:i,beta:c,l:m,u0:u,h_t:h,h_r:p,valI:d,createRAxis:f}=SchemeUtil,gamma=()=>o*h(r)/(s*Math.pow(p(t),2)),mu=e=>o*h(r)/(2*s*e*p(t)),eps=()=>2*i*h(r)/(s*m),generateF=e=>{let a;let l=Array(t+1);for(let n=0;n<t+1;n++)a=p(t)*n,l[n]=e[n]+c*d(a)*h(r)/s;return l},thomasMethod=(e,r,a,l)=>{let n=Array(a.length),o=Array(a.length),s=Array(a.length);n[0]=r[0]/a[0],o[0]=l[0]/a[0];for(let s=1;s<t;s++)n[s]=r[s]/(a[s]-e[s]*n[s-1]),o[s]=(l[s]-e[s]*o[s-1])/(a[s]-e[s]*n[s-1]);let i=t;for(o[t]=(l[i]-e[i]*o[i-1])/(a[i]-e[i]*n[i-1]),s[i]=o[i];i>0;)s[i-=1]=o[i]-n[i]*s[i+1];return s},g=performance.now(),x=f(t),I=[...x].map(e=>({r:e})),y=Array(r+1).fill(0).map(()=>Array(t+1).fill(0));y[0]=Array(t+1).fill(0);let S=(()=>{let e;let r=Array(t+1);for(let a=1;a<t;a++)e=p(t)*a,r[a]=-(gamma()-mu(e));return r[t]=-2*gamma(),r})(),k=(()=>{let e;let r=Array(t+1);r[0]=-4*gamma();for(let a=1;a<t;a++)e=p(t)*a,r[a]=-(gamma()+mu(e));return r})(),j=(()=>{let e=Array(t+1);e[0]=1+4*gamma()+eps();for(let r=1;r<t+1;r++)e[r]=1+2*gamma()+eps();return e})();for(let e=1;e<r+1;e++){let t=generateF(y[e-1]);y[e]=thomasMethod(S,k,j,t)}for(let e=0;e<r+1;e++)for(let r=0;r<t+1;r++)y[e][r]+=u;for(let e=0;e<t+1;e++)I[e]["".concat(l)]=y[a][e];let C=performance.now();return{schemaSolutionGraph:I,SCHEMA_LABEL:l,workTime:C-g}},useKrankNicholsonSolutionGraph=e=>{let{I:t,K:r,k:a}=e,l="Схема Кранка-Николсона",{R:n,kT:o,c:s,alpha:i,beta:c,l:m,u0:u,valI:h,h_t:p,h_r:d,createRAxis:f}=SchemeUtil,mu=e=>o*p(r)/(4*s*e*d(t)),gamma=()=>o*p(r)/(2*s*d(t)*d(t)),eps=()=>i*p(r)/(s*m),thomasMethod=(e,r,a,l)=>{let n=Array(a.length),o=Array(a.length),s=Array(a.length);n[0]=r[0]/a[0],o[0]=l[0]/a[0];for(let s=1;s<t;s++)n[s]=r[s]/(a[s]-e[s]*n[s-1]),o[s]=(l[s]-e[s]*o[s-1])/(a[s]-e[s]*n[s-1]);let i=t;for(o[t]=(l[i]-e[i]*o[i-1])/(a[i]-e[i]*n[i-1]),s[i]=o[i];i>0;)s[i-=1]=o[i]-n[i]*s[i+1];return s},generateF=e=>{let a;let l=gamma(),o=eps(),i=p(r),m=d(t),u=Array(t+1);u[0]=(1-4*l-o)*e[0],u[0]+=4*l*e[1],u[0]+=c*h(0)*i/s;for(let r=1;r<t;r++)a=m*r,u[r]=(1-2*l-o)*e[r],u[r]+=(l+mu(a))*e[r+1],u[r]+=(l-mu(a))*e[r-1],u[r]+=c*h(a)*i/s;return u[t]=(1-2*l-o)*e[t],u[t]+=2*l*e[t-1],u[t]+=c*h(n)*i/s,u},g=performance.now(),x=f(t),I=[...x].map(e=>({r:e})),y=Array(r+1).fill(0).map(()=>Array(t+1).fill(0));y[0]=Array(t+1).fill(0);let S=(()=>{let e;let r=Array(t+1);for(let a=1;a<t;a++)e=d(t)*a,r[a]=-(gamma()-mu(e));return r[t]=-2*gamma(),r})(),k=(()=>{let e;let r=Array(t+1);r[0]=-4*gamma();for(let a=1;a<t;a++)e=d(t)*a,r[a]=-(gamma()+mu(e));return r})(),j=(()=>{let e=Array(t+1);e[0]=1+4*gamma()+eps();for(let r=1;r<t+1;r++)e[r]=1+2*gamma()+eps();return e})();for(let e=1;e<r+1;e++){let t=generateF(y[e-1]);y[e]=thomasMethod(S,k,j,t)}for(let e=0;e<r+1;e++)for(let r=0;r<t+1;r++)y[e][r]+=u;for(let e=0;e<t+1;e++)I[e]["".concat(l)]=y[a][e];let C=performance.now();return{schemaSolutionGraph:I,SCHEMA_LABEL:l,workTime:C-g}},useSchemaSolutionGraph=e=>{let{schemaName:t,I:r,K:a,k:l}=e,n={[y.m.EXPLICIT]:useExplicitSchemaSolutionGraph,[y.m.IMPLICIT]:useImplicitSchemaSolutionGraph,[y.m.KRANK_NICHOLSON]:useKrankNicholsonSolutionGraph},o=n[t];if(!o)throw Error("Invalid schema name: ".concat(t));return o({I:r,K:a,k:l})};var S=r(56720);let selectGraphSettingsModule=e=>e.graphSettings,selectSchemaName=e=>selectGraphSettingsModule(e).schemaName,selectBigK=e=>selectGraphSettingsModule(e).K,selectK=e=>selectGraphSettingsModule(e).k,selectI=e=>selectGraphSettingsModule(e).I;var k=r(2265),j=r(50724),C=r(87303),K=r(16573),T=r(24235),N=r(50039),M=r(2047),w=r(79857),A=r(19223);let Graph=()=>{let e=(0,f.I0)(),t=(0,f.v9)(selectIsDarkTheme),r=(0,f.v9)(selectSchemaName),l=(0,f.v9)(selectBigK),n=(0,f.v9)(selectI),s=(0,f.v9)(selectK),[i,c]=(0,k.useState)(!0);(0,k.useEffect)(()=>{c(!1)},[]);let m=t?"#FFFFFF":"#11111",u=useAnalyticalSolutionGraph({I:n,K:l,k:s}),{schemaSolutionGraph:h,SCHEMA_LABEL:p,workTime:d}=useSchemaSolutionGraph({schemaName:r,I:n,K:l,k:s});(0,k.useEffect)(()=>{e(S.n.setworkTime(d))},[r]);let g=useMergeTwoGraphsByField("r",u,h);return(0,k.useEffect)(()=>{if(!g)return;let t=g.reduce((e,t)=>Math.max(e,Math.abs(t["Аналитическое решение"]-t["".concat(p)])),0);e(S.n.setInaccuracy(t))},[g]),(0,a.jsx)(o.Z,{width:1200,children:i?(0,a.jsx)(j.Z,{width:1200,height:600,baseColor:"#202020",highlightColor:"#444"}):(0,a.jsxs)(C.w,{syncId:"anyId",width:1200,height:600,data:g,children:[(0,a.jsx)(K.q,{stroke:"#ccc",strokeDasharray:"2 2"}),(0,a.jsx)(T.K,{tick:{fill:m},type:"number",domain:["dataMin","dataMax"],tickCount:20,dataKey:"r",style:{fontSize:10},label:{fill:m,value:"Радиус r",position:"bottom",fontSize:20,offset:3}}),(0,a.jsx)(N.B,{style:{fontSize:18},tick:{fill:m},width:150,label:{fontSize:20,fill:m,value:"Температура U(r, t)",angle:-90}}),(0,a.jsx)(M.u,{}),(0,a.jsx)(w.D,{wrapperStyle:{fontSize:20,paddingTop:"40px"}}),(0,a.jsx)(A.x,{type:"monotone",dataKey:"Аналитическое решение",stroke:"red",strokeWidth:"3",dot:{fill:"#2e4355",stroke:"#8884d8",strokeWidth:2,r:0},activeDot:{fill:"#2e4355",stroke:"#8884d8",strokeWidth:5,r:2}},"Аналитическое решение"),(0,a.jsx)(A.x,{type:"monotone",dataKey:"".concat(p),stroke:"green",strokeWidth:"3",dot:{fill:"#2e4355",stroke:"#8884d8",strokeWidth:2,r:0},activeDot:{fill:"#2e4355",stroke:"#8884d8",strokeWidth:5,r:2}},"".concat(p))]})})};var v=r(18210),Z=r(22320),b=r(46385),G=r(14172),_=r(42029),O=r(83321),L=r(49050);let P={I:25,K:5e3,k:5e3,schemaName:y.m.KRANK_NICHOLSON},GraphSettings=()=>{let[e,t]=(0,k.useState)(P),r=(0,f.I0)(),handleCalculateButtonClick=()=>{r(v.J.setSchemaName(e.schemaName)),r(v.J.setBigK(e.K)),r(v.J.setK(e.k)),r(v.J.setI(e.I))},handleInputChange=r=>{let{name:a,value:l}=r.target;t({...e,[a]:Number(l)})},l=e.I<1||e.K<1||e.k<0;return(0,a.jsxs)(o.Z,{sx:{maxWidth:400},flexDirection:"column",onKeyDown:e=>{"Enter"===e.key&&handleCalculateButtonClick()},children:[(0,a.jsxs)(Z.Z,{component:"fieldset",sx:{gap:"10px"},children:[(0,a.jsx)(b.Z,{name:"I",type:"number",label:"Значение I",fullWidth:!0,value:0==e.I?"":e.I,onChange:handleInputChange,InputProps:{inputProps:{min:0}},error:e.I<1}),(0,a.jsx)(b.Z,{name:"K",type:"number",label:"Значение K",fullWidth:!0,value:0==e.K?"":e.K,onChange:handleInputChange,InputProps:{inputProps:{min:0}},error:e.K<1}),(0,a.jsx)(b.Z,{name:"k",type:"number",label:"Номер временного слоя",fullWidth:!0,value:0==e.k?"":e.k,onChange:handleInputChange,InputProps:{inputProps:{min:0}},error:e.k<0}),(0,a.jsx)(G.Z,{children:"Тип схемы"}),(0,a.jsxs)(_.Z,{name:"schemaName",value:e.schemaName,onChange:handleInputChange,children:[(0,a.jsx)(i.Z,{value:y.m.EXPLICIT,control:(0,a.jsx)(O.Z,{size:"small"}),label:(0,a.jsx)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:"Явная схема"})},"EXPLICIT"),(0,a.jsx)(i.Z,{value:y.m.IMPLICIT,control:(0,a.jsx)(O.Z,{size:"small"}),label:(0,a.jsx)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:"Неявная схема"})},"IMPLICIT"),(0,a.jsx)(i.Z,{value:y.m.KRANK_NICHOLSON,control:(0,a.jsx)(O.Z,{size:"small"}),label:(0,a.jsx)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:"Схема Кранка-Николсона"})},"KRANK_NICHOLSON")]})]}),(0,a.jsx)(L.Z,{sx:{marginTop:2},variant:"contained",color:"primary",onClick:handleCalculateButtonClick,disabled:l,children:"Рассчитать"})]})},selectGraphResultsModule=e=>e.graphResults,selectWorkTime=e=>selectGraphResultsModule(e).workTime,selectInaccuracy=e=>selectGraphResultsModule(e).inaccuracy,WorkTimeOutput=()=>{let e=(0,f.v9)(selectWorkTime),t=e.toFixed(4);return(0,a.jsxs)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:["Время вычислений: ",t," мс"]})},InaccuracyOutput=()=>{let e=(0,f.v9)(selectInaccuracy),t=e.toFixed(4);return(0,a.jsxs)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:["Погрешность: ",t]})};function App(){let e=(0,f.v9)(selectIsDarkTheme),t=(0,f.I0)();return(0,a.jsxs)(d.a,{theme:e?p:h,children:[(0,a.jsx)(o.Z,{sx:e=>({backgroundColor:e.palette.background.paper}),className:n().main,flexDirection:"row",alignItems:"center",justifyContent:"center",children:(0,a.jsxs)(o.Z,{flexDirection:"row",justifyContent:"space-between",gap:2,children:[(0,a.jsx)(Graph,{}),(0,a.jsxs)(o.Z,{pt:"6px",children:[(0,a.jsx)(GraphSettings,{}),(0,a.jsxs)(o.Z,{pt:2,direction:"column",gap:1,children:[(0,a.jsx)(WorkTimeOutput,{}),(0,a.jsx)(InaccuracyOutput,{})]})]})]})}),(0,a.jsx)("div",{style:{position:"absolute",top:"10px",right:"10px"},children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(i.Z,{control:(0,a.jsx)(c.Z,{checked:e,onChange:()=>t(g.uQ.toggleTheme())}),label:(0,a.jsx)(m.Z,{sx:e=>({color:e.palette.text.primary}),children:"Ночной режим"})})})})]})}},56720:function(e,t,r){"use strict";r.d(t,{g:function(){return n},n:function(){return o}});var a=r(20064);let l=(0,a.oM)({name:"graphResults",initialState:{workTime:0,inaccuracy:0},reducers:{setworkTime:(e,t)=>{let{payload:r}=t;e.workTime=r},setInaccuracy:(e,t)=>{let{payload:r}=t;e.inaccuracy=r}}}),n=l.reducer,o=l.actions},18210:function(e,t,r){"use strict";r.d(t,{C:function(){return s},J:function(){return i}});var a=r(79892),l=r(20064);let n={I:25,K:5e3,k:5e3,schemaName:a.m.KRANK_NICHOLSON},o=(0,l.oM)({name:"graphSettings",initialState:n,reducers:{setSchemaName:(e,t)=>{let{payload:r}=t;e.schemaName=r},setBigK:(e,t)=>{let{payload:r}=t;e.K=r},setK:(e,t)=>{let{payload:r}=t;e.k=r},setI:(e,t)=>{let{payload:r}=t;e.I=r}}}),s=o.reducer,i=o.actions},2972:function(e,t,r){"use strict";r.d(t,{uQ:function(){return o},xK:function(){return n}});var a=r(20064);let l=(0,a.oM)({name:"theme",initialState:{darkTheme:!0},reducers:{toggleTheme:e=>{e.darkTheme=!e.darkTheme}}}),n=l.reducer,o=l.actions},79892:function(e,t,r){"use strict";var a,l;r.d(t,{m:function(){return a}}),(l=a||(a={}))[l.EXPLICIT=0]="EXPLICIT",l[l.IMPLICIT=1]="IMPLICIT",l[l.KRANK_NICHOLSON=2]="KRANK_NICHOLSON"},59671:function(e){e.exports={main:"page_main__GlU4n"}}},function(e){e.O(0,[713,605,971,864,744],function(){return e(e.s=69373)}),_N_E=e.O()}]);