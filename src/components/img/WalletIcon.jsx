import React from 'react';
function WalletIcon(props) {
    const styleIcono = {
        //width: props.sizeFixed,
        width: '2vw',
    }
    return (
        <svg className={props.className} style={Object.assign({}, styleIcono, props.iconoStyle)} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 512.00 512.00">
            <path fill={props.color} d="
  M 512.00 277.32
  L 512.00 362.57
  Q 508.21 388.79 482.49 394.56
  Q 482.01 394.66 482.01 395.15
  Q 481.97 421.08 482.00 447.00
  Q 482.01 461.53 481.03 466.95
  C 476.25 493.29 453.38 511.68 426.50 511.70
  Q 244.62 511.85 62.74 511.86
  Q 49.12 511.86 42.85 510.46
  C 18.67 505.06 1.46 484.12 0.00 459.21
  L 0.00 182.18
  C 1.94 153.71 22.64 133.07 50.99 130.02
  Q 51.55 129.96 51.36 129.43
  C 48.45 121.35 44.08 111.49 42.88 104.34
  C 40.10 87.71 49.78 71.60 65.76 65.79
  Q 153.75 33.78 241.74 1.74
  C 255.71 -3.35 272.27 3.08 280.63 14.70
  Q 283.52 18.72 286.65 27.41
  Q 292.05 42.39 297.46 57.35
  Q 297.64 57.85 298.17 57.85
  Q 341.03 57.88 383.78 57.86
  Q 398.66 57.86 403.66 59.24
  C 418.83 63.42 429.02 77.63 428.98 93.50
  Q 428.94 111.46 429.03 129.43
  Q 429.04 129.97 429.57 130.00
  C 455.18 131.54 476.47 149.68 481.03 174.82
  Q 482.01 180.21 482.00 194.75
  Q 481.97 219.67 482.01 244.59
  Q 482.01 245.08 482.49 245.19
  Q 508.33 251.00 512.00 277.32
  Z
  M 265.55 57.27
  L 256.93 33.36
  A 4.89 4.88 70.1 0 0 250.67 30.42
  Q 163.40 62.19 75.76 94.06
  C 71.88 95.47 72.11 98.86 73.38 102.31
  Q 78.39 115.97 83.27 129.34
  Q 83.46 129.86 84.01 129.86
  L 223.50 129.86
  A 0.50 0.49 -90.0 0 0 223.99 129.36
  Q 224.01 114.12 224.02 98.87
  C 224.03 86.26 225.27 77.89 233.22 69.24
  C 242.19 59.49 252.33 57.80 265.17 57.80
  A 0.40 0.40 0.0 0 0 265.55 57.27
  Z
  M 398.78 129.86
  A 0.22 0.22 0.0 0 0 399.00 129.64
  Q 398.99 112.65 399.01 95.58
  C 399.02 91.09 398.40 87.83 393.25 87.83
  Q 327.41 87.86 261.57 87.85
  C 254.83 87.85 254.12 89.57 254.05 95.82
  Q 253.85 112.50 254.06 129.23
  Q 254.07 129.86 254.70 129.86
  L 398.78 129.86
  Z
  M 45.27 479.64
  Q 50.18 481.86 52.50 481.86
  Q 235.62 481.85 418.75 481.88
  Q 430.34 481.88 435.10 480.35
  Q 446.78 476.59 450.72 464.39
  Q 452.01 460.37 452.01 453.45
  Q 451.99 424.35 452.00 395.27
  A 0.43 0.42 89.3 0 0 451.57 394.84
  Q 426.94 394.91 402.25 394.83
  Q 389.19 394.79 382.34 393.43
  C 349.90 387.00 325.33 359.61 322.34 326.74
  C 318.83 288.25 345.28 253.25 383.09 246.17
  Q 389.73 244.92 403.01 244.90
  Q 427.20 244.86 451.45 244.86
  Q 451.99 244.86 451.99 244.32
  Q 452.01 216.16 452.01 187.99
  Q 452.01 181.33 450.72 177.37
  Q 446.74 165.17 435.20 161.42
  Q 430.31 159.83 417.13 159.83
  Q 240.76 159.89 64.39 159.83
  Q 51.60 159.83 46.76 161.41
  Q 35.27 165.17 31.27 177.37
  Q 29.99 181.25 29.99 187.66
  Q 30.01 317.82 29.99 447.98
  Q 29.99 460.90 31.54 465.36
  Q 34.89 474.95 45.27 479.64
  Z
  M 482.09 359.50
  L 481.95 280.04
  A 5.35 5.35 0.0 0 0 476.59 274.70
  L 397.48 274.83
  A 45.54 45.06 -0.1 0 0 352.02 319.97
  L 352.02 320.01
  A 45.54 45.06 -0.1 0 0 397.64 364.99
  L 476.75 364.86
  A 5.35 5.35 0.0 0 0 482.09 359.50
  Z"
            />
            <circle fill={props.color} cx="397.00" cy="319.88" r="14.96" />
        </svg>
    )
}


export default WalletIcon;