import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Signature() {
  const theme = useTheme();
  const strokeColor = theme.palette.text.primary;

  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        id="canvas"
        viewBox="518.909 327.983 620.869 205.299"
        width={"25vw"}
        height={"15vh"}
        style={{
          minWidth : "250px",
          minHeight : "125px",

        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 571.20,367.64 C 568.82 369.15, 567.31 372.56, 564.45 378.43 C 561.59 384.31, 560.12 388.72, 556.90 397.04 C 553.69 405.36, 551.63 410.56, 548.36 420.03 C 545.10 429.50, 543.43 434.77, 540.58 444.37 C 537.73 453.98, 536.39 459.15, 534.11 468.06 C 531.83 476.98, 530.85 481.58, 529.18 488.94 C 527.51 496.31, 527.00 499.77, 525.74 504.89 C 524.48 510.01, 523.04 511.71, 522.88 514.53 C 522.72 517.36, 523.55 518.00, 524.95 519.02 C 526.35 520.03, 528.47 520.25, 529.89 519.61 C 531.30 518.96, 533.54 516.45, 532.03 515.80 C 530.52 515.14, 523.77 515.47, 522.34 516.32 C 520.91 517.17, 523.37 519.43, 524.89 520.03 C 526.41 520.64, 528.42 520.23, 529.95 519.36 C 531.48 518.49, 532.05 518.35, 532.54 515.67 C 533.03 512.99, 532.04 511.08, 532.40 505.94 C 532.76 500.80, 533.11 497.31, 534.34 489.96 C 535.57 482.60, 536.45 478.02, 538.54 469.16 C 540.64 460.29, 541.95 455.15, 544.82 445.64 C 547.69 436.14, 549.46 430.96, 552.88 421.64 C 556.30 412.32, 558.55 407.16, 561.92 399.05 C 565.29 390.94, 566.86 386.70, 569.75 381.08 C 572.63 375.45, 576.04 373.60, 576.33 370.91 C 576.62 368.22, 573.57 366.14, 571.20 367.64"
          style={{ stroke: strokeColor }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 553.54,368.05 C 552.47 369.49, 552.13 369.83, 552.58 372.36 C 553.04 374.88, 554.30 376.02, 555.80 380.67 C 557.30 385.32, 558.35 388.88, 560.08 395.61 C 561.81 402.33, 562.63 406.51, 564.45 414.30 C 566.27 422.10, 567.04 426.51, 569.17 434.59 C 571.31 442.66, 572.55 447.08, 575.14 454.67 C 577.72 462.25, 579.18 465.81, 582.09 472.50 C 584.99 479.19, 586.45 482.50, 589.66 488.12 C 592.86 493.73, 594.60 496.34, 598.12 500.56 C 601.63 504.78, 603.45 506.48, 607.23 509.20 C 611.01 511.92, 613.02 513.60, 617.03 514.17 C 621.03 514.74, 623.75 514.26, 627.25 512.04 C 630.75 509.82, 631.79 507.73, 634.52 503.05 C 637.25 498.38, 638.24 495.72, 640.89 488.67 C 643.54 481.61, 645.03 477.21, 647.75 467.78 C 650.47 458.35, 651.92 452.29, 654.49 441.51 C 657.07 430.73, 658.42 424.45, 660.62 413.88 C 662.82 403.31, 663.91 398.18, 665.50 388.67 C 667.09 379.17, 667.44 374.29, 668.56 366.36 C 669.69 358.43, 670.39 354.79, 671.11 349.02 C 671.84 343.26, 672.37 340.98, 672.19 337.53 C 672.02 334.09, 671.35 332.91, 670.24 331.78 C 669.14 330.65, 667.71 330.76, 666.66 331.87 C 665.61 332.99, 665.34 334.03, 665.00 337.35 C 664.65 340.68, 665.19 342.80, 664.93 348.49 C 664.68 354.18, 664.45 357.90, 663.73 365.80 C 663.00 373.70, 662.74 378.56, 661.31 388.01 C 659.89 397.46, 658.82 402.55, 656.62 413.04 C 654.41 423.53, 653.01 429.82, 650.27 440.46 C 647.54 451.11, 645.99 457.14, 642.94 466.29 C 639.89 475.43, 638.09 479.73, 635.03 486.19 C 631.97 492.65, 630.25 495.06, 627.64 498.57 C 625.04 502.09, 623.81 502.61, 621.99 503.77 C 620.17 504.92, 620.55 504.72, 618.55 504.36 C 616.55 503.99, 615.01 503.67, 611.99 501.94 C 608.97 500.21, 606.87 499.11, 603.46 495.71 C 600.06 492.30, 598.21 490.01, 594.95 484.92 C 591.70 479.82, 590.13 476.62, 587.17 470.22 C 584.21 463.83, 582.70 460.34, 580.15 452.95 C 577.59 445.55, 576.35 441.22, 574.38 433.25 C 572.41 425.28, 571.70 420.91, 570.28 413.09 C 568.87 405.27, 568.31 401.06, 567.29 394.15 C 566.27 387.25, 565.88 383.74, 565.17 378.57 C 564.46 373.39, 565.19 370.96, 563.74 368.29 C 562.30 365.61, 559.98 365.22, 557.94 365.18 C 555.90 365.13, 554.61 366.62, 553.54 368.05"
          style={{ stroke: strokeColor }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 662.94,474.78 C 662.23 475.32, 663.09 477.30, 664.23 478.88 C 665.36 480.45, 666.49 481.91, 668.62 482.64 C 670.75 483.38, 672.02 483.95, 674.88 482.56 C 677.75 481.17, 679.29 478.85, 682.94 475.70 C 686.59 472.54, 689.13 470.55, 693.14 466.77 C 697.14 462.98, 699.31 460.89, 702.99 456.78 C 706.66 452.66, 708.56 450.23, 711.51 446.20 C 714.45 442.16, 715.99 440.49, 717.73 436.61 C 719.47 432.72, 720.56 430.58, 720.22 426.77 C 719.87 422.97, 718.73 420.23, 716.00 417.59 C 713.27 414.94, 710.76 413.75, 706.55 413.54 C 702.34 413.34, 699.90 414.42, 694.97 416.56 C 690.04 418.70, 686.98 420.46, 681.90 424.24 C 676.82 428.02, 673.94 430.66, 669.58 435.48 C 665.22 440.30, 663.25 442.88, 660.09 448.32 C 656.93 453.77, 655.34 456.89, 653.77 462.69 C 652.19 468.50, 651.67 471.85, 652.23 477.37 C 652.80 482.89, 653.74 485.86, 656.60 490.29 C 659.46 494.72, 661.62 496.95, 666.51 499.51 C 671.40 502.06, 674.52 502.66, 681.04 503.08 C 687.56 503.50, 691.32 503.01, 699.13 501.59 C 706.94 500.17, 711.58 499.01, 720.09 495.97 C 728.59 492.93, 733.00 490.94, 741.64 486.39 C 750.28 481.84, 755.02 479.06, 763.29 473.23 C 771.55 467.40, 775.70 464.13, 782.98 457.22 C 790.25 450.32, 793.51 446.22, 799.65 438.72 C 805.80 431.21, 808.63 427.33, 813.70 419.70 C 818.77 412.08, 820.99 407.99, 825.00 400.60 C 829.00 393.21, 830.85 389.39, 833.71 382.74 C 836.57 376.09, 837.61 372.98, 839.30 367.36 C 840.99 361.74, 841.56 359.44, 842.14 354.64 C 842.72 349.85, 843.81 346.94, 842.20 343.38 C 840.59 339.82, 837.70 337.71, 834.10 336.85 C 830.50 335.98, 828.10 336.66, 824.20 339.05 C 820.31 341.45, 818.73 343.59, 814.64 348.82 C 810.56 354.06, 807.98 357.69, 803.77 365.22 C 799.56 372.74, 797.19 377.64, 793.58 386.44 C 789.97 395.23, 788.19 400.19, 785.73 409.20 C 783.28 418.22, 782.38 423.09, 781.28 431.50 C 780.19 439.92, 780.17 443.97, 780.25 451.29 C 780.33 458.62, 780.61 462.07, 781.69 468.13 C 782.76 474.19, 783.38 476.80, 785.61 481.60 C 787.84 486.39, 789.28 488.89, 792.85 492.10 C 796.41 495.30, 799.27 496.19, 803.44 497.63 C 807.60 499.06, 810.24 499.75, 813.67 499.26 C 817.11 498.77, 819.44 497.11, 820.61 495.18 C 821.78 493.24, 820.94 491.02, 819.51 489.61 C 818.09 488.19, 816.14 488.46, 813.47 488.08 C 810.80 487.70, 809.20 488.24, 806.15 487.70 C 803.10 487.16, 801.02 487.26, 798.21 485.38 C 795.40 483.50, 794.21 481.99, 792.12 478.29 C 790.03 474.59, 789.06 472.31, 787.76 466.88 C 786.47 461.45, 785.96 458.09, 785.62 451.14 C 785.29 444.18, 785.17 440.23, 786.11 432.10 C 787.04 423.96, 787.88 419.20, 790.31 410.46 C 792.73 401.73, 794.52 396.85, 798.24 388.42 C 801.97 379.99, 804.49 375.22, 808.92 368.29 C 813.35 361.37, 816.29 358.04, 820.39 353.79 C 824.50 349.54, 827.01 348.79, 829.44 347.05 C 831.86 345.32, 831.87 345.17, 832.51 345.12 C 833.15 345.07, 832.31 344.99, 832.61 346.80 C 832.92 348.61, 833.96 350.38, 834.05 354.18 C 834.13 357.97, 834.13 360.47, 833.05 365.77 C 831.96 371.07, 831.10 374.17, 828.63 380.68 C 826.17 387.20, 824.45 391.03, 820.71 398.35 C 816.98 405.66, 814.85 409.72, 809.97 417.26 C 805.10 424.80, 802.33 428.65, 796.35 436.03 C 790.37 443.41, 787.19 447.43, 780.08 454.17 C 772.97 460.91, 768.93 464.08, 760.83 469.72 C 752.72 475.35, 748.03 478.05, 739.55 482.33 C 731.07 486.62, 726.71 488.46, 718.44 491.15 C 710.17 493.84, 705.56 494.75, 698.19 495.79 C 690.82 496.83, 687.22 496.92, 681.60 496.34 C 675.98 495.75, 673.76 494.92, 670.09 492.86 C 666.41 490.81, 665.27 489.34, 663.22 486.07 C 661.17 482.81, 660.34 480.85, 659.84 476.54 C 659.34 472.23, 659.47 469.46, 660.72 464.52 C 661.98 459.59, 663.28 456.65, 666.12 451.85 C 668.95 447.05, 670.80 444.66, 674.90 440.50 C 679.00 436.35, 681.92 434.06, 686.62 431.10 C 691.32 428.13, 694.43 426.91, 698.40 425.70 C 702.38 424.49, 704.37 425.24, 706.51 425.05 C 708.65 424.87, 708.62 424.36, 709.10 424.79 C 709.58 425.22, 709.04 425.59, 708.90 427.20 C 708.75 428.81, 709.33 430.07, 708.39 432.85 C 707.45 435.63, 706.55 437.50, 704.19 441.11 C 701.82 444.72, 700.00 447.24, 696.56 450.89 C 693.12 454.55, 690.99 456.50, 686.99 459.37 C 682.99 462.25, 680.34 463.88, 676.55 465.29 C 672.75 466.70, 670.31 465.63, 668.02 466.43 C 665.73 467.24, 665.47 467.91, 665.09 469.31 C 664.71 470.71, 665.58 472.07, 666.13 473.44 C 666.67 474.81, 668.44 475.88, 667.81 476.15 C 667.17 476.41, 663.66 474.23, 662.94 474.78"
          style={{ stroke: strokeColor }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 910.76,430.18 C 911.36 428.15, 911.23 426.53, 909.66 424.35 C 908.10 422.18, 906.44 420.42, 902.92 419.32 C 899.41 418.21, 896.51 418.33, 892.07 418.82 C 887.63 419.31, 885.27 420.51, 880.73 421.75 C 876.19 423.00, 873.65 423.17, 869.36 425.03 C 865.08 426.89, 862.46 427.96, 859.31 431.05 C 856.16 434.14, 854.35 436.44, 853.61 440.48 C 852.87 444.51, 853.66 447.40, 855.60 451.21 C 857.54 455.03, 859.80 456.41, 863.31 459.55 C 866.82 462.70, 869.17 464.02, 873.13 466.95 C 877.09 469.88, 879.81 471.51, 883.13 474.21 C 886.45 476.92, 887.99 478.57, 889.73 480.49 C 891.46 482.42, 891.65 482.78, 891.81 483.82 C 891.97 484.87, 892.22 484.48, 890.53 485.72 C 888.85 486.96, 887.42 488.32, 883.38 490.02 C 879.35 491.73, 876.11 492.82, 870.35 494.23 C 864.60 495.64, 860.66 496.51, 854.62 497.08 C 848.59 497.65, 845.17 497.43, 840.17 497.09 C 835.16 496.75, 832.95 495.68, 829.62 495.39 C 826.29 495.11, 824.98 494.82, 823.51 495.67 C 822.04 496.52, 821.39 498.06, 822.28 499.65 C 823.17 501.23, 824.47 502.48, 827.96 503.58 C 831.45 504.68, 834.27 504.95, 839.74 505.16 C 845.22 505.37, 848.86 505.22, 855.32 504.64 C 861.79 504.05, 865.80 503.40, 872.07 502.23 C 878.34 501.06, 881.57 500.54, 886.68 498.80 C 891.80 497.05, 894.70 496.53, 897.66 493.51 C 900.63 490.49, 901.42 487.60, 901.52 483.69 C 901.61 479.78, 900.55 477.43, 898.12 473.98 C 895.69 470.53, 893.15 469.43, 889.35 466.44 C 885.55 463.45, 882.91 461.94, 879.13 459.01 C 875.35 456.09, 873.20 454.47, 870.44 451.83 C 867.69 449.19, 866.53 447.66, 865.33 445.82 C 864.13 443.97, 864.14 443.92, 864.44 442.60 C 864.75 441.29, 865.05 440.75, 866.88 439.24 C 868.70 437.73, 870.30 436.36, 873.57 435.03 C 876.85 433.71, 879.48 433.30, 883.24 432.63 C 887.00 431.95, 889.41 431.36, 892.37 431.67 C 895.32 431.99, 896.04 433.50, 898.02 434.21 C 900.01 434.91, 900.57 435.14, 902.30 435.20 C 904.03 435.27, 904.98 435.53, 906.67 434.52 C 908.36 433.52, 910.16 432.22, 910.76 430.18"
          style={{ stroke: strokeColor }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 982.16,435.76 C 981.80 433.62, 980.76 431.59, 977.83 430.44 C 974.89 429.29, 972.37 429.13, 967.48 430.00 C 962.59 430.87, 959.14 431.93, 953.40 434.79 C 947.65 437.65, 944.27 439.97, 938.78 444.31 C 933.28 448.64, 930.14 451.42, 925.91 456.45 C 921.69 461.49, 919.64 464.28, 917.66 469.48 C 915.68 474.67, 914.93 477.70, 916.01 482.42 C 917.10 487.13, 919.05 489.95, 923.08 493.03 C 927.11 496.12, 930.46 496.87, 936.17 497.83 C 941.88 498.80, 945.34 498.56, 951.62 497.84 C 957.90 497.13, 961.34 496.33, 967.58 494.25 C 973.82 492.17, 977.22 490.76, 982.82 487.45 C 988.43 484.13, 991.54 482.23, 995.60 477.69 C 999.65 473.15, 1001.25 470.10, 1003.09 464.72 C 1004.94 459.35, 1005.11 456.00, 1004.83 450.82 C 1004.54 445.63, 1003.61 443.05, 1001.65 438.80 C 999.70 434.55, 998.07 432.15, 995.07 429.56 C 992.06 426.98, 989.57 426.23, 986.63 425.87 C 983.68 425.52, 982.00 426.72, 980.33 427.79 C 978.67 428.86, 978.33 429.88, 978.30 431.22 C 978.28 432.56, 979.45 433.62, 980.21 434.51 C 980.96 435.40, 981.35 435.13, 982.07 435.68 C 982.80 436.22, 982.72 436.57, 983.84 437.21 C 984.96 437.86, 985.83 437.66, 987.67 438.91 C 989.52 440.16, 991.33 440.94, 993.08 443.48 C 994.83 446.02, 995.87 447.82, 996.43 451.61 C 996.99 455.40, 997.09 458.14, 995.87 462.42 C 994.64 466.71, 993.60 469.21, 990.30 473.03 C 986.99 476.85, 984.31 478.61, 979.34 481.52 C 974.36 484.43, 971.12 485.82, 965.43 487.58 C 959.74 489.35, 956.46 489.91, 950.89 490.35 C 945.31 490.80, 942.14 490.62, 937.56 489.80 C 932.97 488.99, 930.72 488.13, 927.98 486.29 C 925.23 484.45, 924.48 483.43, 923.81 480.61 C 923.15 477.78, 923.14 476.07, 924.65 472.16 C 926.16 468.24, 927.64 465.44, 931.36 461.04 C 935.08 456.64, 938.13 453.87, 943.23 450.18 C 948.32 446.48, 951.75 444.49, 956.83 442.56 C 961.92 440.63, 965.03 440.58, 968.64 440.52 C 972.25 440.45, 972.68 442.10, 974.88 442.23 C 977.08 442.36, 978.17 442.46, 979.62 441.17 C 981.08 439.87, 982.52 437.91, 982.16 435.76"
          style={{ stroke: strokeColor }}
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut"
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          d="M 1040.80,448.12 C 1038.73 448.93, 1038.00 451.05, 1036.35 454.30 C 1034.70 457.56, 1034.36 460.11, 1032.55 464.40 C 1030.73 468.68, 1029.45 471.35, 1027.27 475.74 C 1025.08 480.13, 1023.93 482.59, 1021.62 486.35 C 1019.32 490.11, 1016.80 491.36, 1015.73 494.55 C 1014.66 497.73, 1014.84 499.93, 1016.27 502.26 C 1017.71 504.58, 1020.19 506.26, 1022.90 506.17 C 1025.61 506.07, 1027.08 504.89, 1029.83 501.77 C 1032.58 498.64, 1033.34 495.53, 1036.66 490.53 C 1039.98 485.53, 1041.88 482.15, 1046.43 476.76 C 1050.98 471.38, 1053.92 468.47, 1059.41 463.60 C 1064.89 458.74, 1068.13 456.29, 1073.87 452.44 C 1079.62 448.58, 1082.71 446.89, 1088.15 444.33 C 1093.59 441.77, 1096.45 440.65, 1101.08 439.66 C 1105.70 438.67, 1107.87 438.76, 1111.29 439.36 C 1114.71 439.96, 1115.91 440.60, 1118.18 442.66 C 1120.46 444.72, 1121.07 445.80, 1122.66 449.65 C 1124.26 453.50, 1125.05 456.45, 1126.15 461.92 C 1127.25 467.40, 1127.76 470.86, 1128.17 477.03 C 1128.57 483.21, 1128.24 486.72, 1128.18 492.79 C 1128.12 498.86, 1128.21 502.42, 1127.87 507.39 C 1127.54 512.36, 1126.76 514.26, 1126.51 517.63 C 1126.25 521.01, 1126.35 522.24, 1126.58 524.26 C 1126.82 526.28, 1127.08 526.83, 1127.68 527.73 C 1128.28 528.63, 1129.13 528.62, 1129.59 528.76 C 1130.05 528.90, 1129.39 528.13, 1129.98 528.43 C 1130.57 528.74, 1131.79 530.22, 1132.55 530.28 C 1133.32 530.34, 1133.36 529.28, 1133.82 528.73 C 1134.28 528.19, 1134.28 528.38, 1134.83 527.55 C 1135.39 526.71, 1136.27 526.48, 1136.61 524.54 C 1136.95 522.59, 1136.69 521.23, 1136.56 517.82 C 1136.42 514.41, 1136.17 512.49, 1135.95 507.48 C 1135.73 502.47, 1135.56 498.94, 1135.45 492.77 C 1135.35 486.59, 1135.76 483.06, 1135.44 476.61 C 1135.11 470.16, 1134.84 466.55, 1133.83 460.52 C 1132.82 454.48, 1132.39 451.31, 1130.38 446.46 C 1128.36 441.60, 1127.33 439.25, 1123.77 436.23 C 1120.20 433.21, 1117.42 432.08, 1112.54 431.37 C 1107.67 430.67, 1104.83 431.27, 1099.39 432.73 C 1093.95 434.18, 1091.12 435.68, 1085.35 438.64 C 1079.58 441.59, 1076.52 443.43, 1070.54 447.51 C 1064.56 451.59, 1061.28 454.10, 1055.45 459.02 C 1049.61 463.94, 1046.53 466.92, 1041.37 472.12 C 1036.21 477.32, 1033.76 480.56, 1029.65 485.03 C 1025.54 489.51, 1023.04 491.47, 1020.82 494.50 C 1018.61 497.53, 1018.27 498.53, 1018.57 500.18 C 1018.87 501.83, 1020.69 502.81, 1022.32 502.75 C 1023.95 502.69, 1025.10 502.22, 1026.71 499.88 C 1028.33 497.54, 1028.57 495.01, 1030.40 491.05 C 1032.23 487.08, 1033.60 484.55, 1035.86 480.04 C 1038.13 475.53, 1039.65 472.89, 1041.72 468.50 C 1043.79 464.11, 1045.21 461.75, 1046.21 458.09 C 1047.21 454.43, 1047.81 452.21, 1046.73 450.21 C 1045.65 448.22, 1042.88 447.30, 1040.80 448.12"
          style={{ stroke: strokeColor }}
        />
      </motion.svg>
    </>
  );
}
