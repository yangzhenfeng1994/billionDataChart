// 故障数据 Mock
const fault = [
  [
    588, 658, 834, 993, 1181, 1230, 1871, 1994, 2832, 3102, 3275, 3336, 5024, 5150, 8014, 8136,
    8467, 9008, 9353, 9504,
  ],
  [
    18, 165, 405, 985, 1990, 3255, 3310, 3500, 3604, 3605, 4162, 4232, 4302, 4323, 4456, 4829, 5023,
    5344, 5561, 5860, 5926, 6037, 6063, 6253, 6331, 6390, 6413, 6812, 6898, 6947, 7351, 7736, 8230,
    8291, 8760, 8817, 8834, 9186, 9681,
  ],
  [
    64, 109, 195, 233, 288, 460, 492, 577, 586, 595, 862, 921, 995, 1013, 1317, 1869, 1912, 2030,
    2208, 2385, 2470, 2478, 2490, 2505, 2549, 2688, 2838, 2871, 2901, 2951, 3055, 3089, 3146, 3149,
    3443, 3595, 3736, 3984, 4093, 4269, 4362, 4609, 4670, 4874, 4883, 4901, 5021, 5140, 5329, 5371,
    5422, 5450, 5519, 5549, 5767, 5868, 5968, 6136, 6386, 6443, 6488, 6610, 6678, 6682, 6756, 6765,
    6849, 6954, 7027, 7233, 7289, 7398, 7636, 7654, 7658, 7727, 7885, 7899, 7985, 8027, 8040, 8174,
    8176, 8397, 8657, 8660, 8769, 8777, 8970, 9000, 9004, 9314, 9410, 9448, 9584, 9760,
  ],
  [
    343, 803, 1494, 1698, 1918, 1960, 2366, 3018, 3464, 3689, 3843, 4088, 4909, 5645, 5893, 6336,
    6523, 7266, 7645, 8165, 9233,
  ],
  [
    358, 501, 557, 575, 1087, 1963, 2216, 2387, 3022, 3196, 3287, 3953, 4028, 4775, 4912, 5054,
    5360, 5510, 5533, 5822, 6251, 6254, 6580, 6679, 6787, 6901, 7410, 8500, 8824, 8979, 9052, 9118,
    9385, 9543, 9771,
  ],
  [
    35, 104, 342, 460, 526, 601, 620, 721, 740, 983, 1034, 1062, 1118, 1485, 1502, 1672, 1786, 1848,
    1900, 2061, 2063, 2071, 2075, 2194, 2492, 2543, 2708, 2804, 2873, 3104, 3363, 3557, 3653, 3685,
    3839, 3962, 4001, 4004, 4050, 4135, 4172, 4548, 4608, 5008, 5163, 5216, 5319, 5390, 5534, 5933,
    5934, 6265, 6270, 6295, 6315, 6642, 7216, 7317, 7563, 7930, 8088, 8095, 8119, 8192, 8547, 8579,
    8634, 8638, 8831, 8895, 9014, 9157, 9188, 9649, 9806, 9949,
  ],
  [814, 941, 2016, 7676, 7957, 9397, 9656, 9815],
  [618, 638, 1385, 2090, 4127, 4651, 5340, 6354, 6745, 7715, 7889, 9191],
  [396, 434, 661, 1389, 2050, 3931, 7064, 8888, 9085, 9653],
  [3918, 7459, 7995, 9370],
  [
    249, 468, 469, 544, 575, 935, 1159, 1424, 1492, 1678, 2642, 2705, 3413, 3748, 3867, 4377, 4409,
    4496, 4813, 5187, 5202, 5335, 5496, 5916, 6771, 6984, 7048, 7891, 8102, 8710, 8821, 8867, 9078,
    9089, 9337, 9566, 9578, 9623, 9681,
  ],
  [
    579, 2857, 3294, 3733, 4064, 4466, 4483, 4729, 4772, 4878, 5394, 6008, 6415, 6865, 6927, 7277,
    8949, 9387, 9936,
  ],
  [
    182, 264, 278, 377, 391, 458, 528, 952, 1037, 1162, 1280, 1864, 2029, 2287, 2422, 2615, 2795,
    2814, 2846, 3226, 3272, 3366, 3557, 4042, 4250, 4310, 4541, 4777, 4989, 5237, 5263, 5277, 6141,
    6189, 6204, 6783, 6909, 7060, 7089, 7110, 7131, 7189, 7236, 7638, 7680, 7722, 8149, 8411, 8701,
    8768, 8859, 8896, 8911, 9400, 9453, 9665, 9802, 9828, 9882, 9994,
  ],
  [855, 960, 1718, 2136, 2497, 2909, 3801, 3813, 4820, 5027, 6794, 7115, 8206, 8717, 9420],
  [139, 512, 2368, 3113, 3660, 6556, 6576, 7388, 7603, 8642, 9971],
  [
    97, 197, 365, 426, 433, 486, 513, 524, 611, 644, 1227, 1407, 1524, 1690, 1710, 1775, 1869, 2092,
    2146, 2346, 2674, 2694, 3122, 3205, 3235, 3246, 3730, 3757, 4058, 4075, 4154, 4295, 4348, 4374,
    4475, 4558, 4647, 4675, 5105, 5157, 5215, 5273, 5408, 5564, 5750, 5858, 5926, 6176, 6212, 6232,
    6553, 6811, 6953, 6964, 6999, 7107, 7246, 7600, 7666, 7780, 7848, 7868, 7949, 7998, 8298, 8386,
    8422, 8587, 8612, 8797, 9018, 9183, 9226, 9349, 9587, 9647, 9672, 9909,
  ],
  [
    70, 205, 358, 361, 545, 795, 855, 895, 1043, 1061, 1158, 1239, 1259, 1303, 1364, 1366, 1367,
    1508, 1571, 1573, 1788, 1849, 1869, 2066, 2250, 2417, 2622, 2774, 2899, 2974, 3137, 3191, 3283,
    3357, 3468, 3596, 3622, 3868, 4021, 4060, 4198, 4400, 4427, 4521, 4578, 4605, 4805, 5139, 5140,
    5356, 5711, 5841, 6000, 6094, 6101, 6120, 6141, 6164, 6228, 6316, 6553, 6596, 6623, 6639, 6899,
    7074, 7334, 7564, 7589, 7592, 7646, 7914, 8031, 8234, 8276, 8411, 8457, 8514, 8517, 8528, 8645,
    8724, 8748, 8785, 8796, 8939, 8960, 9043, 9096, 9155, 9349, 9410, 9518, 9527, 9669, 9678, 9683,
    9773, 9938,
  ],
  [
    3, 149, 223, 444, 454, 566, 1431, 1708, 1950, 1959, 2295, 2388, 2513, 2534, 2589, 2693, 2784,
    3106, 3421, 3549, 3651, 4388, 4654, 4796, 4900, 5066, 5080, 5927, 5968, 6084, 6164, 6274, 6312,
    6394, 6471, 6625, 7116, 7304, 7435, 7551, 7642, 7708, 7794, 7953, 8012, 8107, 8168, 8171, 8275,
    9121, 9466, 9568, 9608, 9666, 9716, 9857, 9910, 9919,
  ],
  [
    236, 555, 1286, 1372, 2240, 3323, 3712, 4055, 4808, 4854, 4996, 5244, 5670, 5750, 6119, 6195,
    7165, 9698,
  ],
  [
    1722, 2172, 2402, 2533, 2721, 2743, 3190, 3269, 3323, 3508, 4682, 5067, 5907, 6062, 6101, 6388,
    7034, 7319, 7334, 7546, 7568, 7749, 7881, 8174, 8551, 9371, 9380,
  ],
  [
    334, 356, 755, 874, 894, 1426, 1579, 1779, 1812, 1980, 2077, 2263, 2428, 2503, 2517, 3059, 3209,
    3457, 4031, 4055, 4577, 5455, 5522, 5902, 6110, 6411, 6443, 7267, 7557, 8206, 8407, 8749, 8968,
    9072, 9813,
  ],
  [
    28, 59, 60, 258, 289, 367, 373, 571, 597, 622, 625, 711, 822, 1084, 1182, 1378, 1380, 1488,
    1594, 1727, 1771, 1904, 2110, 2143, 2161, 2339, 2469, 2636, 2671, 2788, 2828, 2868, 2964, 3156,
    3548, 3696, 4100, 4144, 4199, 4326, 4388, 4432, 4479, 4557, 4682, 4693, 4808, 4838, 4866, 4939,
    4959, 4994, 5021, 5025, 5090, 5173, 5300, 5391, 5619, 5627, 5633, 5656, 5878, 6012, 6043, 6092,
    6179, 6415, 6647, 6738, 6822, 6931, 6962, 7076, 7356, 7451, 7456, 7544, 7665, 7735, 7772, 7819,
    7901, 7922, 7930, 7984, 8157, 8580, 8613, 8650, 8669, 8973, 8984, 9245, 9542, 9576, 9595, 9701,
  ],
  [
    33, 62, 443, 850, 855, 1182, 1198, 1202, 1397, 1964, 2019, 2186, 2329, 2336, 2418, 2613, 2615,
    2654, 2863, 2912, 2983, 3306, 3400, 3406, 3472, 3590, 3748, 3869, 3971, 4372, 4668, 4770, 4935,
    5262, 5305, 5485, 5884, 6051, 6322, 6426, 6681, 6693, 6695, 6911, 7194, 7438, 7564, 7620, 8091,
    8244, 8460, 8505, 8749, 8926, 8938, 8964, 9641, 9760, 9902, 9931,
  ],
  [
    82, 198, 306, 865, 893, 1704, 1809, 2321, 2652, 2749, 3266, 3776, 3953, 4332, 4429, 4475, 4719,
    4952, 5318, 5598, 6522, 6606, 6609, 8390, 8473, 8966, 9495,
  ],
  [
    186, 216, 280, 372, 468, 528, 550, 598, 655, 753, 979, 1182, 1528, 1775, 1935, 2024, 2444, 2616,
    2682, 2718, 2842, 2867, 2904, 2923, 3058, 3076, 3115, 3140, 3591, 3636, 3815, 3827, 3989, 4010,
    4065, 4151, 4336, 4536, 4552, 4631, 4689, 4772, 4814, 4924, 5106, 5245, 5607, 6033, 6089, 6335,
    6393, 6585, 6725, 7156, 7246, 7297, 7326, 7383, 8009, 8113, 8259, 8346, 8583, 8587, 8695, 8896,
    9043, 9061, 9196, 9331, 9498, 9609, 9746, 9751, 9772, 9892,
  ],
  [
    205, 286, 330, 473, 519, 817, 935, 1129, 1202, 1249, 1302, 1326, 1336, 1499, 1682, 2017, 2116,
    2274, 2287, 2299, 2365, 2521, 2566, 2662, 2711, 2849, 3011, 3205, 3246, 3375, 3467, 3519, 3578,
    3638, 3714, 3737, 3964, 3978, 4133, 4566, 4615, 4837, 4930, 5122, 5130, 5250, 5715, 5745, 6170,
    6457, 6637, 6833, 6959, 7096, 7128, 7150, 7187, 7836, 7880, 8663, 8766, 8917, 9074, 9135, 9172,
    9311, 9441, 9652, 9683, 9696, 9709, 9835,
  ],
  [
    55, 177, 424, 734, 1094, 1514, 1674, 2339, 2406, 2628, 2877, 3362, 3689, 4467, 4614, 5118, 5482,
    5529, 5766, 6608, 6684, 7322, 7397, 7703, 7915, 8516, 8959, 9246, 9478, 9499, 9657, 9730, 9780,
  ],
  [
    42, 901, 1384, 2462, 3131, 3152, 3204, 4288, 4383, 5648, 7330, 7402, 7593, 7809, 7955, 8293,
    8305, 8644, 8882, 9074,
  ],
  [
    495, 588, 1149, 1201, 1332, 1342, 1688, 1914, 2559, 2643, 2667, 2945, 3099, 3213, 3336, 3838,
    4651, 5223, 5285, 6232, 6310, 6338, 6491, 7314, 7320, 7433, 7947, 8117, 8649, 8900, 9086, 9710,
  ],
  [
    93, 187, 570, 735, 816, 949, 968, 970, 971, 1057, 1294, 1487, 1559, 1695, 1819, 1975, 2147,
    2251, 2288, 2309, 2693, 2917, 3063, 3142, 3449, 3643, 3847, 3848, 4108, 4561, 4902, 4960, 5422,
    5554, 5774, 6191, 6471, 6648, 6798, 6855, 6927, 7282, 7925, 8038, 8098, 8139, 8318, 8531, 8637,
    9051, 9529, 9571, 9587, 9670, 9770, 9783,
  ],
  [
    366, 859, 1339, 1388, 1682, 2083, 2104, 2319, 3352, 3762, 4876, 4884, 5103, 5202, 5372, 5709,
    5814, 5906, 5936, 6563, 6576, 6734, 7096, 7185, 7270, 7620, 8305, 8699, 9377, 9745, 9811,
  ],
  [
    16, 46, 211, 525, 589, 887, 975, 1082, 1342, 1588, 1745, 1769, 1815, 1834, 1923, 1952, 1980,
    2116, 2159, 2194, 2233, 2488, 2499, 2886, 3133, 3165, 3279, 3381, 3435, 3588, 4135, 4263, 4437,
    4555, 4583, 4648, 4721, 4806, 5060, 5203, 5503, 5678, 5872, 6004, 6036, 6121, 6174, 6512, 6641,
    6703, 7480, 7738, 7751, 7892, 7919, 8248, 8327, 8489, 8761, 8811, 9434, 9640, 9830, 9839, 9896,
    9955, 9969, 9971, 9997,
  ],
  [
    455, 845, 918, 1543, 1599, 1714, 1980, 2250, 2550, 3111, 3225, 3549, 3783, 3833, 4028, 5854,
    5897, 6667, 7185, 7195, 7515, 7657, 7835, 7867, 7913, 8127, 8568, 8747, 9016, 9222,
  ],
  [
    41, 480, 933, 1116, 1277, 1288, 1322, 1857, 1950, 2247, 3053, 3120, 3612, 3749, 3924, 4007,
    4190, 4542, 4713, 5534, 5727, 6159, 6451, 6785, 7575, 8572, 9370, 9534, 9586, 9654,
  ],
  [
    240, 1283, 1309, 2049, 2075, 2079, 2419, 2432, 2572, 2643, 2707, 3113, 3311, 3580, 3979, 4033,
    4508, 4575, 4603, 4718, 4749, 4778, 5142, 5365, 5388, 5580, 5788, 5964, 6322, 6364, 6491, 6807,
    7049, 7399, 7551, 7609, 8059, 8308, 8566, 8851, 9014, 9136, 9142, 9327, 9412, 9531, 9563, 9765,
    9952, 9992,
  ],
  [
    19, 158, 667, 748, 863, 1200, 1242, 1307, 1310, 1357, 1583, 1654, 2085, 2458, 2788, 2972, 3179,
    3343, 3634, 4225, 4420, 4507, 4621, 4792, 4898, 4962, 5190, 5345, 5372, 5428, 5715, 5979, 5980,
    6326, 6348, 6637, 6786, 7134, 7261, 7464, 8085, 8304, 8408, 8505, 8614, 8875, 8999, 9059, 9383,
    9498, 9655, 9833,
  ],
  [
    144, 546, 1094, 1825, 2146, 2321, 2975, 3892, 4047, 4442, 4613, 4621, 5302, 5695, 5971, 6018,
    7954, 7980, 7983, 8255, 8734, 8974, 9029, 9224,
  ],
  [
    81, 95, 263, 903, 1047, 1363, 1464, 1592, 1613, 1744, 2617, 3140, 3173, 3347, 3488, 3992, 4000,
    4248, 4309, 5199, 5307, 5313, 5562, 5800, 5820, 6933, 7052, 7115, 7138, 7185, 7230, 7508, 7558,
    7620, 7762, 7797, 7799, 8374, 8480, 8570, 8864, 9114, 9236, 9257, 9466, 9481, 9843,
  ],
  [],
  [452, 1435, 1762, 1783, 3889, 4398, 7231, 9067, 9214, 9783],
  [
    398, 766, 914, 1011, 1956, 2046, 2081, 2217, 2373, 2463, 2527, 2564, 2767, 3131, 3159, 3202,
    3376, 3496, 3788, 4669, 4704, 4836, 4849, 5143, 5379, 5469, 5618, 5934, 6263, 6574, 6722, 6767,
    7031, 7441, 7660, 7703, 7954, 8015, 8264, 8596, 8692, 8814, 8956, 9141, 9448, 9660, 9875,
  ],
  [1141, 2570, 3770, 4081, 5846, 7357, 8046, 8173, 8812, 8925, 9177, 9996],
  [426, 472, 1055, 1511, 1672, 3576, 4773, 4965, 5131, 6065, 7737, 8589, 8844, 8984, 9472],
  [
    1556, 1941, 2445, 2474, 3468, 3893, 4003, 4436, 4700, 5106, 6594, 7004, 7397, 7759, 7927, 8187,
    8803, 9103, 9117, 9265, 9347, 9448,
  ],
  [
    41, 179, 246, 679, 712, 841, 1026, 1069, 1193, 1448, 1472, 1519, 1698, 1720, 1838, 1874, 1877,
    2225, 2397, 2640, 2774, 3103, 3153, 3252, 3391, 3521, 3547, 3671, 3752, 3903, 3953, 4525, 4530,
    4799, 4844, 4978, 4980, 5240, 5286, 5409, 5606, 5866, 6118, 6179, 6231, 6297, 6389, 6566, 6854,
    6874, 6929, 7003, 7016, 7224, 7227, 7232, 7239, 7251, 7387, 7877, 7945, 8006, 8103, 8129, 8272,
    8317, 8362, 8403, 8494, 8550, 8626, 8753, 8882, 8942, 9362, 9511, 9524, 9535, 9568, 9617, 9622,
    9921, 9994,
  ],
  [
    239, 291, 558, 812, 1006, 1188, 1218, 1362, 1380, 1493, 1661, 1692, 1745, 2152, 2162, 2179,
    2355, 2540, 2559, 2632, 2885, 2969, 3146, 3324, 3456, 3531, 3558, 3569, 3587, 3627, 3732, 3798,
    3838, 4006, 4147, 4200, 4502, 4627, 4663, 4774, 4851, 5002, 5004, 5035, 5047, 5249, 5264, 5705,
    5858, 5902, 5940, 6000, 6179, 6329, 6414, 6473, 6700, 6830, 6901, 7007, 7127, 7210, 7461, 7605,
    7746, 7786, 8177, 8206, 8262, 8293, 8304, 8433, 8482, 8637, 8769, 8896, 8990, 9026, 9240, 9271,
    9293, 9606, 9615, 9621, 9800, 9839,
  ],
  [
    518, 879, 922, 2345, 2493, 2517, 3092, 3402, 3955, 4168, 5117, 5242, 5450, 5505, 5531, 5666,
    5795, 7079, 7194, 7205, 7434, 7462, 7496, 8507, 8576, 9394, 9649, 9774,
  ],
  [
    200, 209, 212, 217, 290, 326, 379, 409, 903, 1576, 1823, 2026, 2095, 2325, 2429, 2435, 2438,
    2472, 3053, 3062, 3115, 3548, 3794, 3984, 4037, 4146, 4164, 4196, 4209, 4261, 4338, 4482, 5463,
    5510, 5531, 5793, 5919, 6337, 6378, 6464, 6508, 6873, 6920, 7261, 7511, 7571, 7781, 7909, 7962,
    7964, 8203, 8271, 8450, 8453, 8503, 8608, 8722, 8985, 9035, 9078, 9348, 9505, 9678, 9997,
  ],
  [
    58, 84, 107, 218, 270, 286, 491, 930, 1096, 1125, 1210, 1245, 1430, 1507, 1558, 1828, 1934,
    2067, 2999, 3037, 3139, 3340, 3722, 3877, 3942, 4092, 4112, 4140, 4756, 5224, 5650, 5788, 5794,
    5990, 6191, 6227, 6666, 6702, 6713, 6715, 6744, 6948, 7135, 7180, 7398, 7565, 7573, 7597, 7756,
    7929, 8036, 8762, 9257, 9344, 9683, 9997,
  ],
  [
    358, 758, 773, 800, 918, 1096, 1117, 1171, 1279, 1482, 1485, 1692, 1858, 2090, 2314, 2490, 2676,
    2812, 2823, 3403, 3472, 3513, 3623, 3674, 3767, 3842, 3894, 3962, 4142, 4286, 4341, 4390, 4452,
    4500, 4512, 4581, 4695, 4887, 5085, 5131, 5264, 5302, 5373, 5429, 5522, 5591, 5602, 5717, 5763,
    5847, 6052, 6121, 6126, 6277, 6331, 6333, 6383, 6611, 6677, 6683, 6713, 6788, 6915, 7077, 7175,
    7226, 7276, 7300, 7606, 7625, 7679, 7851, 7978, 8204, 8272, 8297, 8460, 8557, 8603, 8831, 9157,
    9175, 9242, 9588, 9839, 9851, 9917, 9920,
  ],
  [
    39, 252, 262, 359, 577, 846, 1084, 1141, 1200, 1314, 1388, 1420, 2035, 2226, 2242, 2389, 2467,
    2564, 2665, 2747, 2772, 2948, 3201, 3708, 4032, 4456, 4468, 4869, 5033, 5086, 5320, 5549, 6325,
    6537, 6650, 6848, 7004, 7093, 7232, 7443, 7579, 7599, 7960, 8041, 8130, 8135, 8792, 8874, 9008,
    9169, 9201, 9271, 9294, 9333, 9359, 9895,
  ],
  [
    331, 406, 525, 1066, 1572, 1822, 1827, 2194, 2449, 2852, 2905, 3130, 3669, 3779, 3833, 3872,
    4943, 4958, 5070, 5079, 5087, 5408, 5537, 5650, 5789, 5900, 5917, 6034, 6047, 6056, 6185, 6407,
    6425, 6498, 6791, 6826, 6920, 7053, 7284, 7488, 7556, 7610, 7646, 7831, 8114, 8239, 8365, 8401,
    8415, 8582, 8866, 9099, 9160, 9228, 9344, 9593, 9724, 9756, 9789, 9936,
  ],
  [
    177, 608, 1194, 1647, 1998, 2083, 2567, 2748, 3187, 3551, 4152, 5487, 5611, 5787, 5828, 6245,
    6334, 7089, 8981, 9090, 9528,
  ],
  [
    13, 112, 456, 671, 694, 728, 888, 942, 1009, 1094, 1117, 1160, 1307, 1388, 1729, 1969, 1979,
    2007, 2080, 2118, 2313, 2532, 2592, 2633, 2753, 2816, 2848, 2992, 2996, 3063, 3130, 3212, 3237,
    3414, 4318, 4410, 4450, 4811, 5152, 5521, 5641, 5674, 5783, 5861, 5871, 5895, 5982, 6142, 6404,
    6411, 6559, 6586, 6857, 6943, 7174, 7390, 7651, 7701, 7745, 8006, 8178, 8185, 8215, 8265, 8299,
    8542, 8591, 8613, 8764, 8882, 8975, 9010, 9041, 9064, 9087, 9099, 9184, 9291, 9411, 9449, 9578,
    9710, 9712, 9914,
  ],
  [
    216, 736, 1004, 1361, 1528, 1605, 1674, 1732, 2028, 2131, 2231, 2333, 2437, 2698, 2973, 3102,
    3275, 3305, 3502, 3938, 4168, 4170, 4262, 4282, 4598, 4712, 5099, 5368, 5451, 5753, 5830, 5983,
    6039, 6046, 6069, 6143, 6360, 6464, 6638, 6740, 7446, 7538, 7634, 7920, 7973, 8151, 8174, 8344,
    8380, 8699, 8973, 9153, 9407, 9766, 9855,
  ],
  [
    105, 209, 243, 344, 474, 625, 660, 736, 746, 823, 934, 1467, 1499, 1612, 1686, 1780, 1804, 1960,
    1982, 2043, 2160, 2214, 2303, 2500, 2504, 2529, 2568, 2642, 3329, 3375, 3419, 3561, 3618, 4020,
    4167, 4229, 4308, 4333, 4347, 4582, 4758, 4879, 5194, 5224, 5393, 5457, 5539, 5627, 5667, 5720,
    5774, 5828, 5833, 5936, 6273, 6314, 6336, 6376, 6394, 6534, 6667, 6789, 6816, 6860, 7037, 7056,
    7090, 7101, 7121, 7157, 7410, 7526, 7883, 7913, 8334, 8420, 8577, 8582, 8812, 8859, 8906, 8951,
    9003, 9057, 9127, 9391, 9424, 9573, 9640,
  ],
  [
    186, 352, 459, 740, 1046, 1212, 1583, 1759, 1871, 1879, 1910, 1974, 2054, 2055, 2150, 2319,
    2956, 2958, 3018, 3393, 3447, 3864, 3901, 4047, 4193, 4542, 4643, 5279, 5482, 5842, 5927, 6152,
    6253, 6407, 6587, 6622, 6713, 6797, 6800, 7315, 7822, 8262, 8403, 8410, 8445, 8621, 9008, 9297,
    9352, 9463, 9821, 9947,
  ],
  [
    48, 312, 412, 416, 651, 808, 883, 972, 988, 1219, 1511, 1628, 1630, 1903, 1905, 1931, 1998,
    2043, 2489, 2826, 3340, 3416, 3433, 3617, 3709, 3798, 3823, 3849, 3911, 4058, 4098, 4110, 4247,
    4300, 4330, 4373, 4440, 4496, 4550, 4647, 4715, 4729, 4744, 4808, 5303, 5308, 5362, 5531, 5623,
    5708, 5917, 6193, 6601, 6604, 6619, 6624, 6866, 7074, 7109, 7194, 7384, 7418, 8037, 8100, 8279,
    8281, 8479, 8673, 8698, 8707, 8748, 8767, 9039, 9059, 9078, 9263, 9345, 9355, 9401, 9471, 9752,
    9813, 9913, 9975,
  ],
  [
    53, 229, 536, 695, 1009, 1167, 1174, 1346, 1457, 1494, 1581, 1599, 1642, 1973, 2005, 2133, 2211,
    2243, 2253, 2311, 2342, 2416, 2434, 2542, 2578, 2675, 2769, 3023, 3146, 3547, 3680, 3731, 3736,
    3820, 3931, 4087, 4114, 4257, 4444, 4677, 4862, 5095, 5591, 5842, 5845, 5901, 5927, 5948, 6006,
    6023, 6245, 6423, 6773, 6895, 7505, 7803, 8057, 8164, 8191, 8794, 8997, 9219, 9640, 9782, 9871,
  ],
  [
    14, 192, 315, 422, 623, 817, 836, 848, 863, 1248, 1288, 1556, 1726, 2330, 2413, 2471, 3020,
    3125, 3214, 3360, 3377, 3459, 3597, 3652, 3887, 3897, 4107, 4143, 4231, 4247, 4344, 4912, 5139,
    5158, 5349, 5672, 6017, 6024, 6049, 6114, 6592, 6778, 6908, 6991, 7393, 7523, 7770, 7795, 7904,
    8010, 8037, 8616, 9014, 9513, 9639, 9661, 9991,
  ],
  [
    106, 137, 310, 1100, 2047, 2547, 2671, 3701, 3764, 4149, 4427, 4667, 5115, 5308, 6229, 7176,
    7424, 9357, 9551, 9821, 9856,
  ],
  [218, 797, 1281, 1517, 1933, 2629, 2658, 3559, 3816, 3983, 4201, 4590, 6437, 6723, 6979, 9121],
  [
    30, 160, 302, 308, 309, 463, 559, 654, 717, 1130, 1355, 1481, 1910, 2266, 2433, 2487, 2517,
    2726, 2901, 2997, 3099, 3615, 3808, 3817, 3994, 4527, 4669, 4994, 5141, 5408, 5633, 5721, 5971,
    6084, 6398, 6479, 6527, 6531, 6581, 6640, 6710, 6987, 7052, 7211, 7576, 8098, 8130, 8335, 8572,
    8647, 8727, 9026, 9058, 9060, 9088, 9582, 9683, 9961, 9984, 9990,
  ],
  [
    49, 420, 446, 904, 911, 1112, 1284, 1546, 1793, 1840, 1902, 1942, 2431, 2809, 3202, 3603, 4161,
    4902, 4909, 5158, 5216, 5658, 5686, 6103, 6122, 6428, 6580, 6914, 7007, 7334, 7970, 8367, 8859,
    9033, 9885, 9898, 9954,
  ],
  [
    47, 553, 590, 672, 1456, 2420, 2918, 2950, 3340, 3358, 3406, 3993, 4122, 4561, 4586, 5164, 5337,
    6100, 6109, 6140, 6178, 6192, 6472, 6565, 6987, 7423, 7785, 7806, 7833, 8072, 8187, 8306, 8549,
    8652, 8854, 9016, 9219,
  ],
  [1209, 1400, 2265, 2927, 3095, 3352, 3670, 4770, 5700, 6262, 6652, 7905, 7978, 9131],
  [1265, 2096, 2854, 6850, 6939, 7787, 8432],
  [3269, 5585, 7320],
  [
    227, 329, 455, 1005, 1136, 1331, 2042, 3075, 3171, 3891, 4099, 4254, 4350, 4743, 5704, 6376,
    7167, 7789, 8441, 8493, 8648, 9275, 9467, 9678,
  ],
  [
    1, 194, 467, 533, 549, 703, 754, 957, 962, 1348, 1442, 2080, 2345, 2350, 2828, 3139, 3190, 3302,
    3394, 3477, 3771, 3896, 3906, 4898, 4906, 4911, 5646, 5866, 5970, 5976, 6002, 6043, 6177, 6262,
    6441, 6805, 6988, 7425, 7500, 7533, 7658, 7740, 7779, 7890, 8131, 8397, 8436, 8912, 8938, 8970,
    8989, 9043, 9235, 9368, 9417, 9487, 9812, 9901, 9915, 9969,
  ],
  [
    389, 465, 906, 1490, 2265, 3314, 4148, 4265, 4293, 4553, 4665, 4769, 5117, 6050, 6605, 6740,
    7831, 7955, 8336, 8991, 9142, 9887, 9952, 9981, 9984,
  ],
  [
    147, 313, 318, 365, 459, 467, 659, 693, 802, 810, 867, 1034, 1056, 1288, 1321, 1365, 1429, 1512,
    1592, 1618, 1867, 1938, 2114, 2214, 2480, 2588, 2592, 2656, 2846, 2964, 3015, 3021, 3094, 3220,
    3292, 3479, 3595, 3807, 3829, 3930, 4192, 4327, 4349, 4451, 4512, 4695, 4748, 4764, 4802, 4820,
    4830, 4973, 5073, 5278, 5497, 5514, 5548, 5744, 5951, 6025, 6138, 6209, 6271, 6652, 6769, 6898,
    7314, 7366, 7673, 7697, 7898, 7960, 8073, 8074, 8112, 8173, 8525, 8533, 8690, 8712, 8725, 8746,
    8813, 9000, 9178, 9240, 9248, 9468, 9545, 9575, 9716, 9798, 9799,
  ],
  [
    100, 147, 170, 180, 397, 488, 511, 600, 694, 701, 1066, 1252, 1468, 1788, 1838, 1942, 2062,
    2287, 2293, 2448, 2615, 2628, 2771, 2845, 2847, 2862, 3084, 3185, 3210, 3401, 3486, 3567, 3674,
    3732, 3797, 3842, 3883, 3957, 4118, 4156, 4230, 4325, 4613, 4637, 4940, 4997, 5325, 5362, 5865,
    5943, 5970, 6027, 6145, 6202, 6436, 6459, 6622, 6665, 6796, 6838, 6864, 7110, 7115, 7163, 7385,
    7462, 7485, 7540, 7599, 7704, 7806, 7891, 7916, 8073, 8115, 8164, 8183, 8460, 8644, 8666, 8669,
    8696, 8700, 8733, 8877, 8978, 9229, 9253, 9365, 9559, 9656, 9683, 9748, 9866,
  ],
  [
    163, 262, 424, 512, 966, 977, 1014, 1038, 1070, 1141, 1228, 1474, 1483, 1710, 1733, 1740, 1892,
    2109, 2230, 2517, 3081, 3134, 3501, 3599, 3651, 3715, 3773, 3824, 3840, 4337, 4820, 4974, 5292,
    5501, 5524, 5535, 5565, 5784, 6077, 6164, 6240, 6248, 6295, 6348, 6436, 7196, 7286, 7301, 7306,
    7750, 7776, 7970, 8135, 8424, 8721, 9248, 9330, 9709, 9876, 9922,
  ],
  [
    143, 466, 557, 561, 655, 736, 1099, 1275, 1366, 1796, 2308, 2347, 2350, 2447, 2710, 2805, 2823,
    3165, 3563, 3961, 4327, 4409, 4512, 4589, 4759, 4931, 5151, 5222, 5921, 6200, 6412, 7133, 7193,
    7276, 7557, 7596, 7814, 8308, 8364, 8453, 8454, 8487, 9089, 9157, 9515, 9721,
  ],
  [
    75, 148, 151, 254, 256, 355, 400, 1011, 1260, 1313, 1446, 1698, 1864, 2013, 2050, 2122, 2191,
    2270, 2306, 2310, 2434, 2550, 2690, 2743, 2878, 3195, 3311, 3611, 3688, 3938, 3989, 4210, 4327,
    4343, 4384, 4705, 4786, 4797, 4852, 4942, 4953, 5207, 5383, 5540, 5570, 5604, 5641, 5700, 5786,
    5830, 5848, 6017, 6051, 6326, 6360, 6387, 6844, 7117, 7194, 7253, 7255, 7304, 7342, 7400, 7794,
    7827, 7898, 8012, 8019, 8592, 8645, 8825, 8856, 8878, 8912, 9051, 9069, 9108, 9580, 9774, 9776,
    9933,
  ],
  [2122, 3939, 6158, 8079],
  [
    62, 177, 320, 341, 596, 697, 797, 1030, 1123, 1248, 1279, 1334, 1340, 1504, 1600, 1705, 1756,
    1803, 3181, 3308, 3471, 3599, 3808, 4509, 4536, 5116, 5189, 5209, 5603, 5691, 5968, 6093, 6186,
    6288, 6445, 6680, 6902, 7031, 7053, 7477, 7598, 7945, 7961, 7987, 8014, 8481, 8661, 8728, 9059,
    9105, 9306, 9474, 9548, 9842,
  ],
  [
    524, 615, 888, 992, 1802, 2651, 2730, 3099, 3109, 3528, 3611, 3634, 4031, 4916, 4991, 5145,
    5201, 5329, 5452, 6274, 6385, 6782, 6838, 6858, 6913, 7207, 7263, 7797, 7892, 8001, 8459, 9437,
    9586,
  ],
  [
    26, 317, 582, 593, 677, 1000, 1001, 1044, 1047, 1074, 1112, 1149, 1323, 1699, 1720, 1738, 1850,
    1937, 1963, 2084, 2117, 2210, 2238, 2276, 2335, 2458, 2471, 2573, 2616, 2646, 2722, 2743, 2935,
    3126, 3244, 3257, 3362, 3439, 3557, 3711, 3750, 3796, 3811, 3842, 3867, 3975, 4124, 4180, 4191,
    5083, 5241, 5451, 5543, 5646, 5682, 5686, 6156, 6246, 6340, 6417, 6428, 6550, 6706, 6739, 6907,
    6999, 7270, 7293, 7306, 7343, 7425, 7589, 7609, 7816, 7857, 7960, 7996, 8021, 8123, 8145, 8664,
    8694, 8870, 9094, 9203, 9301, 9356, 9548, 9615, 9619, 9795, 9830, 9976,
  ],
  [
    40, 112, 243, 846, 1162, 1179, 1912, 2181, 2287, 2473, 2479, 2586, 2606, 2891, 2909, 2973, 2981,
    3167, 3533, 3598, 3747, 3757, 3781, 3808, 3926, 3947, 4061, 4065, 4069, 4755, 4876, 4958, 5107,
    5123, 5555, 5647, 5691, 5785, 5812, 5821, 6033, 6139, 6163, 6496, 6660, 6733, 7123, 7245, 7397,
    7587, 7709, 7844, 8256, 8476, 8777, 8793, 8967, 9265, 9419, 9566, 9768, 9787, 9892,
  ],
  [
    127, 381, 412, 429, 952, 1410, 1628, 1735, 1850, 1937, 2003, 2068, 2409, 2563, 2788, 3219, 3407,
    3424, 3752, 3771, 3964, 4362, 4552, 4909, 5435, 5986, 6062, 6648, 7403, 7474, 7503, 8041, 8193,
    8359, 8667, 9416, 9902,
  ],
  [
    374, 980, 1142, 1162, 1277, 1406, 1427, 1559, 1641, 1804, 1839, 2016, 2081, 2169, 2246, 2297,
    2860, 2970, 3010, 3045, 3117, 3131, 3152, 3180, 3207, 3344, 3502, 3999, 4051, 4107, 4202, 4304,
    4325, 4530, 4765, 5118, 5217, 5242, 5256, 5263, 5793, 5797, 5884, 6090, 6276, 6300, 6313, 6861,
    7135, 7309, 7563, 7622, 7709, 8163, 8377, 8703, 8959, 9128, 9529, 9984,
  ],
  [
    9, 28, 380, 662, 873, 941, 1078, 1261, 1319, 1472, 1556, 2221, 2265, 2459, 2610, 2691, 2854,
    2861, 2982, 3171, 3333, 3514, 3633, 3690, 3735, 3857, 4204, 4494, 4509, 4946, 5106, 5342, 5359,
    5426, 6158, 6206, 6237, 6267, 6392, 6420, 6451, 6527, 6660, 6739, 7084, 7235, 7412, 7436, 7470,
    7539, 7579, 7647, 7649, 7847, 8500, 8561, 8605, 8697, 9009, 9028, 9070, 9096, 9130, 9188, 9315,
    9324, 9368, 9504, 9628, 9648,
  ],
  [
    6, 61, 151, 196, 221, 519, 547, 585, 593, 808, 821, 929, 1260, 1552, 1592, 1622, 1976, 1987,
    2215, 2323, 2488, 2664, 2699, 2803, 2878, 2914, 2963, 3044, 3144, 4136, 4542, 4588, 4801, 4822,
    4968, 5434, 6067, 6173, 6550, 6623, 6909, 7101, 7118, 7263, 7290, 7676, 7712, 8146, 8242, 8367,
    8383, 8453, 8585, 9001, 9216, 9620, 9721, 9809, 9820,
  ],
  [
    602, 723, 1351, 1911, 1933, 2405, 3197, 3377, 3680, 3848, 4240, 4473, 5378, 5381, 5457, 5498,
    5815, 6089, 6682, 6968, 7126, 7656, 8108, 8503, 8583, 8647, 8898, 9464, 9757,
  ],
  [
    191, 882, 1015, 1836, 2200, 2254, 2406, 2511, 2960, 3702, 3729, 3930, 4164, 4623, 4835, 5159,
    5570, 5914, 5957, 5997, 6068, 6278, 6357, 6719, 6739, 6991, 7139, 7186, 7658, 7700, 7918, 8273,
    8339, 8597, 8769, 8819, 9141, 9352, 9406, 9686, 9868,
  ],
  [
    283, 309, 345, 450, 974, 1053, 1401, 1570, 1588, 1762, 1767, 1826, 2065, 2122, 2408, 2508, 2580,
    2699, 2715, 3029, 3064, 3307, 3486, 3744, 3903, 3997, 4060, 4077, 4363, 4410, 4422, 4433, 4740,
    4864, 5061, 5120, 5232, 5341, 5374, 5402, 5458, 5469, 5510, 5514, 5520, 5528, 5570, 5602, 5662,
    5682, 6127, 6129, 6373, 6410, 6436, 6550, 6716, 6781, 6905, 7296, 7467, 7524, 7547, 7596, 7786,
    7798, 7879, 7906, 8475, 8932, 9209, 9539, 9837, 9852, 9959,
  ],
  [
    34, 40, 73, 111, 318, 341, 376, 393, 710, 723, 726, 810, 847, 902, 907, 910, 934, 1215, 1304,
    1335, 1378, 1391, 1559, 1616, 1617, 1778, 1816, 2027, 2081, 2152, 2191, 2274, 2284, 2294, 2734,
    3501, 3520, 3946, 4048, 4346, 4370, 4503, 4641, 4953, 5119, 5341, 5568, 5829, 6045, 6075, 6077,
    6126, 6181, 6403, 6443, 6750, 6759, 6952, 7080, 7103, 7369, 7380, 7425, 7528, 7559, 7643, 7843,
    7888, 8129, 8148, 8152, 8278, 8422, 8729, 8803, 8983, 9580,
  ],
  [
    115, 275, 290, 334, 433, 924, 1001, 1012, 1084, 1146, 1167, 1581, 1725, 1737, 1981, 1989, 2038,
    2326, 2358, 2382, 2514, 2681, 2687, 2828, 2873, 2999, 3128, 3273, 3309, 3423, 3480, 3542, 3556,
    3600, 3723, 3769, 4066, 4668, 4694, 4731, 4799, 4813, 4822, 4826, 4962, 4969, 5163, 5237, 5249,
    5524, 5761, 5960, 6036, 6125, 6129, 6217, 6386, 6450, 6463, 6728, 6928, 6932, 6961, 6982, 7188,
    7307, 7343, 7726, 7757, 7890, 7904, 7917, 7952, 8079, 8223, 8336, 8427, 8436, 8458, 8605, 8827,
    8866, 8873, 8967, 8988, 9311, 9768,
  ],
  [
    115, 562, 1217, 1232, 1979, 2321, 2632, 2875, 2922, 3333, 3642, 4661, 4713, 4901, 4942, 5200,
    5306, 5395, 5927, 5969, 6070, 6337, 6675, 6846, 7411, 7519, 7540, 7738, 7928, 8006, 8101, 8496,
    8801, 9011, 9449, 9902, 9949,
  ],
  [
    26, 84, 98, 184, 243, 454, 479, 612, 888, 1015, 1026, 1120, 1366, 1418, 1496, 1511, 1537, 1544,
    1572, 1795, 1908, 2028, 2194, 2288, 2581, 2851, 3121, 3428, 3498, 3809, 3857, 4209, 4510, 4750,
    4772, 4820, 5282, 5466, 5535, 5701, 5760, 5858, 6104, 6356, 6431, 6625, 6791, 6908, 7001, 7130,
    7264, 7301, 7368, 7754, 7848, 7957, 8153, 8320, 8324, 8611, 8669, 8773, 8791, 8875, 8879, 9036,
    9045, 9241, 9433, 9437, 9775, 9837,
  ],
  [
    51, 179, 230, 355, 452, 586, 601, 693, 889, 1329, 1641, 1724, 1830, 1935, 1936, 1969, 2353,
    2578, 2678, 2871, 2880, 3543, 3721, 3905, 3958, 4275, 4297, 4632, 5468, 5937, 6044, 6403, 6658,
    6798, 6963, 7107, 7488, 7642, 7677, 7855, 8354, 8598, 9076, 9940,
  ],
  [
    254, 399, 402, 475, 557, 591, 874, 1191, 1221, 1299, 1332, 1416, 1599, 1727, 1783, 1785, 1854,
    1877, 1908, 2077, 2079, 2105, 2158, 2214, 3190, 3331, 3334, 3386, 3501, 3598, 3768, 3950, 4271,
    4280, 4437, 4603, 4745, 5070, 5122, 5181, 5659, 5896, 5945, 6375, 6631, 6714, 6731, 6916, 7366,
    7367, 7409, 7483, 7704, 7767, 7862, 7978, 8004, 8120, 8188, 8203, 8333, 8562, 8647, 8832, 8965,
    9087, 9469, 9731, 9763, 9860,
  ],
  [
    141, 783, 1385, 1459, 1486, 1552, 1644, 1670, 1751, 1782, 1845, 2107, 2373, 2946, 2954, 3383,
    3504, 3599, 4320, 4594, 4766, 4857, 4863, 4965, 5031, 5155, 5317, 5537, 5947, 6050, 6128, 6359,
    6384, 6511, 6577, 6587, 6662, 6876, 6894, 6900, 6987, 7444, 7474, 7532, 7773, 7845, 8076, 8128,
    8141, 8473, 8901, 9016, 9388, 9620, 9742, 9845, 9948,
  ],
  [
    61, 2623, 2627, 2870, 3502, 3888, 3902, 5094, 6416, 7506, 7707, 7766, 7988, 8039, 8067, 9442,
    9596, 9894, 9910,
  ],
  [505, 1197, 2669, 3197, 3933, 4263, 4517, 6935, 6957, 7819, 8900, 9550, 9621],
  [
    12, 321, 374, 552, 773, 1641, 2389, 2654, 2931, 3259, 3791, 4463, 5087, 5180, 5461, 5726, 5808,
    6799, 6912, 7155, 7193, 7290, 7304, 7758, 7772, 8001, 8168, 8704, 8760, 9191, 9440, 9452, 9759,
    9900,
  ],
  [
    46, 84, 381, 401, 407, 545, 645, 844, 976, 1354, 1682, 1800, 2052, 2146, 2218, 2235, 2267, 2300,
    2321, 2577, 2621, 2691, 2759, 3152, 3199, 3323, 3487, 3532, 3548, 3791, 3868, 3886, 3909, 3940,
    4083, 4101, 4305, 4404, 4509, 4658, 4762, 4793, 4870, 4882, 5059, 5158, 5284, 5306, 5327, 5365,
    5664, 5955, 6214, 6441, 6523, 6615, 6640, 6734, 7083, 7097, 7132, 7240, 7544, 7548, 7561, 7640,
    7719, 7871, 7949, 7974, 8168, 8271, 8456, 8549, 8647, 8697, 8904, 8990, 9172, 9193, 9213, 9532,
  ],
  [
    39, 360, 433, 686, 956, 959, 1481, 1574, 1584, 1682, 1732, 2099, 2242, 2316, 2349, 2371, 2462,
    2693, 2896, 2899, 2922, 2951, 3006, 3082, 3093, 3222, 3423, 3538, 3675, 3689, 3893, 3998, 4287,
    4296, 4367, 4601, 4674, 4703, 4755, 4803, 4895, 5089, 5259, 5301, 5514, 5750, 5762, 5892, 6178,
    6195, 6227, 6565, 6888, 7014, 7134, 7148, 7199, 7220, 7437, 7510, 8020, 8087, 8176, 8265, 8288,
    8481, 8570, 8732, 8763, 9002, 9280, 9655, 9689, 9714, 9902,
  ],
]

export default fault

// const arr = []
// for (let i = 0; i < 100; i++) {
//   let item = new Set()
//   let n = ~~(Math.random() * 100)
//   for (let j = 0; j < n; j++) {
//     item.add(~~(Math.random() * 1e4))
//   }
//   arr.push([...item].sort((a, b) => a - b))
// }
// JSON.stringify(arr)
