import IconComponentProps from "../IconComponentProps";

const HappyIcon = ({ width, height, fillColor }: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "16"}
    height={height ?? "16"}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4707 7.1248C15.3385 7.05972 15.2083 6.99266 15.0762 6.92758C15.1413 6.27082 15.2083 5.61209 15.2734 4.95533C14.737 4.80544 14.8238 4.908 14.6818 4.36366C14.4845 4.36366 14.2873 4.36366 14.0901 4.36366C14.0901 4.29858 14.0901 4.23152 14.0901 4.16644C14.2222 4.16644 14.3524 4.16644 14.4845 4.16644C14.4845 3.96921 14.4845 3.77199 14.4845 3.57476C14.3524 3.57476 14.2222 3.57476 14.0901 3.57476C14.0901 3.37754 14.0901 3.18031 14.0901 2.98309C13.8929 2.98309 13.6956 2.98309 13.4984 2.98309C13.4984 2.91801 13.4984 2.85095 13.4984 2.78587C13.4333 2.78587 13.3663 2.78587 13.3012 2.78587C13.3663 2.65373 13.4333 2.52356 13.4984 2.39142C13.3663 2.39142 13.2361 2.39142 13.104 2.39142C13.104 2.25928 13.104 2.12911 13.104 1.99697C12.1573 1.71888 12.9166 1.76424 12.5123 1.20807C12.4472 1.20807 12.3802 1.20807 12.3151 1.20807C12.3151 1.14299 12.3151 1.07593 12.3151 1.01085C11.8378 0.843206 11.9048 1.32641 11.7234 1.4053C11.5913 1.4053 11.4611 1.4053 11.3289 1.4053C11.3289 1.53744 11.3289 1.6676 11.3289 1.79974C11.2639 1.79974 11.1968 1.79974 11.1317 1.79974C11.1317 1.73466 11.1317 1.6676 11.1317 1.60252C11.0666 1.60252 10.9996 1.60252 10.9345 1.60252C10.8694 1.5473 11.3723 1.25343 11.5262 1.01085C11.2934 0.874762 10.9818 0.444813 10.9345 0.419174C10.6722 0.419174 10.4079 0.419174 10.1456 0.419174C10.0805 0.287034 10.0135 0.156866 9.94837 0.0247254C9.59732 -0.0955815 8.93661 0.253506 8.56781 0.419174C8.56781 0.287034 8.56781 0.156866 8.56781 0.0247254C8.04122 0.0247254 7.5166 0.0247254 6.99001 0.0247254C6.99001 0.0247254 6.99198 0.77615 6.79279 0.419174C6.5147 0.387618 6.86379 0.14306 6.59556 0.22195C6.59556 0.287034 6.59556 0.35409 6.59556 0.419174C6.05911 0.509897 6.17153 -0.0541644 5.80666 0.0247254C5.80666 0.0898094 5.80666 0.156866 5.80666 0.22195C5.39249 0.346201 5.11046 0.381701 4.82054 0.616398C4.75546 0.748539 4.6884 0.878707 4.62332 1.01085C4.42609 1.01085 4.22887 1.01085 4.03165 1.01085C4.03165 1.07593 4.03165 1.14299 4.03165 1.20807C3.83442 1.27316 3.6372 1.34021 3.43997 1.4053C3.43997 1.53744 3.43997 1.6676 3.43997 1.79974C3.11061 1.73466 2.78322 1.6676 2.45385 1.60252C2.54655 2.03247 2.58007 2.16264 2.8483 2.39142C2.8483 2.4565 2.8483 2.52356 2.8483 2.58864C2.58599 2.58864 2.32171 2.58864 2.0594 2.58864C2.0594 2.65373 2.0594 2.72078 2.0594 2.78587C1.52295 2.93576 1.60973 2.8332 1.46773 3.37754C1.66495 3.37754 1.86218 3.37754 2.0594 3.37754C2.0594 3.44262 2.0594 3.50968 2.0594 3.57476C1.73004 3.50968 1.40264 3.44262 1.07328 3.37754C1.03186 3.82129 0.909584 4.53327 0.678831 4.75811C0.546691 4.75811 0.416523 4.75811 0.284383 4.75811C0.284383 4.82319 0.284383 4.89025 0.284383 4.95533C0.349467 4.95533 0.416523 4.95533 0.481607 4.95533C0.434273 5.23736 0.187743 5.27286 0.284383 5.74423C0.349467 5.74423 0.416523 5.74423 0.481607 5.74423C0.481607 5.80932 0.481607 5.87637 0.481607 5.94146C0.349467 6.00654 0.219299 6.0736 0.0871582 6.13868C0.0871582 6.92758 0.0871582 7.71647 0.0871582 8.50537C0.152242 8.50537 0.219299 8.50537 0.284383 8.50537C0.219299 8.7026 0.152242 8.89982 0.0871582 9.09705C0.219299 9.09705 0.349467 9.09705 0.481607 9.09705C0.353411 9.4343 0.286355 9.71633 0.284383 10.2804C0.481607 10.2804 0.678831 10.2804 0.876056 10.2804C0.82675 10.6216 0.637414 11.093 0.876056 11.4637C0.94114 11.4637 1.0082 11.4637 1.07328 11.4637C1.07328 11.5288 1.07328 11.5959 1.07328 11.661C1.33559 11.5959 1.59987 11.5288 1.86218 11.4637C1.74187 11.7793 1.68073 11.9312 1.66495 12.4499C2.5643 12.5011 2.5071 12.7299 3.04552 13.0415C3.04552 13.2388 3.04552 13.436 3.04552 13.6332C3.43997 13.7653 3.83442 13.8955 4.22887 14.0277C4.22887 14.2249 4.22887 14.4221 4.22887 14.6193C4.29395 14.6193 4.36101 14.6193 4.42609 14.6193C4.42609 14.5542 4.42609 14.4872 4.42609 14.4221C4.62332 14.4221 4.82054 14.4221 5.01777 14.4221C4.95268 14.5542 4.88563 14.6844 4.82054 14.8166C4.90732 14.998 4.94874 14.7751 5.01777 15.211C5.14991 15.211 5.28008 15.211 5.41222 15.211C5.41222 14.9487 5.41222 14.6844 5.41222 14.4221C5.4773 14.4221 5.54436 14.4221 5.60944 14.4221C5.60944 14.4872 5.60944 14.5542 5.60944 14.6193C5.83822 14.4596 5.62916 14.6371 5.80666 14.4221C5.9388 14.4221 6.06897 14.4221 6.20111 14.4221C6.13603 14.6193 6.06897 14.8166 6.00389 15.0138C6.20111 14.9487 6.39834 14.8816 6.59556 14.8166C6.95057 14.8363 7.44165 15.4516 8.17336 15.211C8.17336 15.1459 8.17336 15.0789 8.17336 15.0138C8.3055 15.0138 8.43566 15.0138 8.56781 15.0138C8.56781 14.9487 8.56781 14.8816 8.56781 14.8166C8.76503 14.8166 8.96225 14.8166 9.15948 14.8166C9.15948 14.7515 9.15948 14.6844 9.15948 14.6193C9.22456 14.6193 9.29162 14.6193 9.3567 14.6193C9.3567 14.6844 9.3567 14.7515 9.3567 14.8166C9.90104 14.8816 10.3231 14.4892 10.54 14.2249C10.6051 14.2249 10.6722 14.2249 10.7373 14.2249C10.6722 14.357 10.6051 14.4872 10.54 14.6193C11.4276 14.6174 11.6208 14.4892 12.1178 14.2249C12.1178 14.0277 12.1178 13.8304 12.1178 13.6332C11.897 13.858 12.033 13.6312 11.9206 14.0277C11.8555 14.0277 11.7885 14.0277 11.7234 14.0277C11.7234 13.8304 11.7234 13.6332 11.7234 13.436C12.1178 13.5011 12.5123 13.5681 12.9067 13.6332C12.8417 13.436 12.7746 13.2388 12.7095 13.0415C13.2617 12.7063 12.9048 12.653 13.104 12.4499C13.169 12.4499 13.2361 12.4499 13.3012 12.4499C13.4787 12.7201 13.6818 12.4992 13.8929 12.2526C14.025 12.2526 14.1552 12.2526 14.2873 12.2526C13.6562 11.6412 14.7745 11.8996 14.4845 11.2665C14.4195 11.2665 14.3524 11.2665 14.2873 11.2665C14.2873 11.2014 14.2873 11.1344 14.2873 11.0693C14.4195 11.1344 14.5496 11.2014 14.6818 11.2665C14.6167 11.0693 14.5496 10.8721 14.4845 10.6748C14.5496 10.6748 14.6167 10.6748 14.6818 10.6748C14.6818 10.5427 14.6818 10.4125 14.6818 10.2804C14.8139 10.2804 14.9441 10.2804 15.0762 10.2804C15.0111 9.88594 14.9441 9.49149 14.879 9.09705C15.0762 9.09705 15.2734 9.09705 15.4707 9.09705C15.4707 8.44029 15.4707 7.78353 15.4707 7.1248ZM13.3012 9.88791C13.0152 10.9904 12.039 11.5485 11.5262 12.4518C11.1968 12.5169 10.8694 12.584 10.54 12.6491C10.4217 13.0435 10.5677 12.8187 10.3428 13.0435C10.3566 13.15 10.2284 13.86 10.54 13.6352C10.54 13.5701 10.54 13.503 10.54 13.438C10.6051 13.438 10.6722 13.438 10.7373 13.438C10.7373 13.503 10.7373 13.5701 10.7373 13.6352C10.6722 13.6352 10.6051 13.6352 10.54 13.6352C10.54 13.7003 10.54 13.7673 10.54 13.8324C10.475 13.8324 10.4079 13.8324 10.3428 13.8324C10.2107 13.6352 10.0805 13.438 9.94837 13.2407C9.75115 13.2407 9.55393 13.2407 9.3567 13.2407C9.3567 13.1756 9.3567 13.1086 9.3567 13.0435C9.02734 13.1086 8.69995 13.1756 8.37058 13.2407C8.37058 13.3729 8.37058 13.503 8.37058 13.6352C7.44954 13.5701 6.52851 13.503 5.60944 13.438C5.60944 13.3058 5.60944 13.1756 5.60944 13.0435C5.21499 12.9784 4.82054 12.9114 4.42609 12.8463C4.36101 12.584 4.29395 12.3197 4.22887 12.0574C3.8995 11.9923 3.57211 11.9252 3.24275 11.8602C3.27628 10.6196 3.16583 10.6117 2.25663 10.874C2.32171 10.4796 2.38877 10.0851 2.45385 9.69069C2.32171 9.62561 2.19154 9.55855 2.0594 9.49347C2.0594 9.36133 2.0594 9.23116 2.0594 9.09902C2.28029 8.87418 2.14421 9.10099 2.25663 8.70457C2.12449 8.70457 1.99432 8.70457 1.86218 8.70457C1.86218 8.24504 1.86218 7.78353 1.86218 7.324C1.92726 7.324 1.99432 7.324 2.0594 7.324C2.11857 6.97294 1.86218 6.92955 1.86218 6.92955C1.86218 6.73233 1.86218 6.5351 1.86218 6.33788C1.92726 6.33788 1.99432 6.33788 2.0594 6.33788C2.11265 5.93159 1.86218 5.94343 1.86218 5.94343C1.86218 5.61406 1.86218 5.28667 1.86218 4.95731C1.92726 4.95731 1.99432 4.95731 2.0594 4.95731C2.0594 5.15453 2.0594 5.35175 2.0594 5.54898C2.12449 5.54898 2.19154 5.54898 2.25663 5.54898C2.37299 5.24723 2.41441 5.2275 2.45385 4.76008C2.58599 4.76008 2.71616 4.76008 2.8483 4.76008C2.8483 4.56286 2.8483 4.36563 2.8483 4.16841C2.98044 4.16841 3.11061 4.16841 3.24275 4.16841C3.37489 3.77396 3.50506 3.37951 3.6372 2.98506C4.09673 2.91998 4.55823 2.85292 5.01777 2.78784C5.08285 2.6557 5.14991 2.52553 5.21499 2.39339C5.34713 2.39339 5.4773 2.39339 5.60944 2.39339C5.60944 2.32831 5.60944 2.26125 5.60944 2.19617C5.87175 2.19617 6.13603 2.19617 6.39834 2.19617C6.46342 2.06403 6.53048 1.93386 6.59556 1.80172C6.92493 1.80172 7.25232 1.80172 7.58168 1.80172C7.58168 1.73663 7.58168 1.66958 7.58168 1.60449C7.71382 1.60449 7.84399 1.60449 7.97613 1.60449C8.20097 1.82538 7.97416 1.6893 8.37058 1.80172C8.37058 1.93386 8.37058 2.06403 8.37058 2.19617C8.50272 2.19617 8.63289 2.19617 8.76503 2.19617C8.76503 2.06403 8.76503 1.93386 8.76503 1.80172C8.89717 1.8668 9.02734 1.93386 9.15948 1.99894C10.0529 2.01866 10.471 2.00486 10.9345 2.39339C10.9996 2.52553 11.0666 2.6557 11.1317 2.78784C11.3289 2.78784 11.5262 2.78784 11.7234 2.78784C11.8378 3.64774 12.0212 3.31246 12.1178 4.16841C12.3151 4.16841 12.5123 4.16841 12.7095 4.16841C12.7095 4.23349 12.7095 4.30055 12.7095 4.36563C12.7746 4.36563 12.8417 4.36563 12.9067 4.36563C12.9718 4.695 13.0389 5.02239 13.104 5.35175C13.2361 5.35175 13.3663 5.35175 13.4984 5.35175C13.4984 5.61406 13.4984 5.87834 13.4984 6.14065C13.3663 6.14065 13.2361 6.14065 13.104 6.14065C13.104 6.27279 13.104 6.40296 13.104 6.5351C13.2361 6.5351 13.3663 6.5351 13.4984 6.5351C13.5063 7.3378 13.3387 9.82283 13.3012 9.88791Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1178 4.36364C11.9856 4.36364 11.8555 4.36364 11.7233 4.36364C11.7233 4.2315 11.7233 4.10134 11.7233 3.9692C11.5912 3.9692 11.461 3.9692 11.3289 3.9692C11.2638 3.70689 11.1967 3.44261 11.1317 3.1803C10.0883 3.25524 10.394 3.51952 9.35664 3.57475C9.35664 3.77197 9.35664 3.9692 9.35664 4.16642C8.78667 4.31039 8.70186 4.37745 8.56775 4.95532C8.37052 4.95532 8.1733 4.95532 7.97607 4.95532C8.18316 5.88622 8.35474 5.71858 8.1733 6.73034C8.63283 6.73034 9.09434 6.73034 9.55387 6.73034C9.55387 6.66525 9.55387 6.5982 9.55387 6.53311C9.61895 6.53311 9.68601 6.53311 9.75109 6.53311C9.75109 6.5982 9.75109 6.66525 9.75109 6.73034C9.81618 6.73034 9.88323 6.73034 9.94832 6.73034C9.86943 6.03216 9.67812 5.95524 9.55387 5.34977C9.88323 5.28468 10.2106 5.21763 10.54 5.15254C10.6603 6.04202 10.8851 5.72449 10.9344 6.73034C11.0666 6.73034 11.1967 6.73034 11.3289 6.73034C11.3289 6.66525 11.3289 6.5982 11.3289 6.53311C11.4472 6.52917 11.6957 6.70667 12.1178 6.73034C12.1829 6.07358 12.2499 5.41485 12.315 4.75809C12.2499 4.75809 12.1829 4.75809 12.1178 4.75809C12.1178 4.62595 12.1178 4.49578 12.1178 4.36364Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.0019 6.13879C5.93682 6.13879 5.86976 6.13879 5.80468 6.13879C5.80468 6.20387 5.80468 6.27093 5.80468 6.33601C6.06107 6.49774 6.03938 6.4721 6.19913 6.73046C6.52849 6.66538 6.85589 6.59832 7.18525 6.53324C7.18131 5.77984 7.08467 5.29664 6.98803 4.75822C6.7908 4.75822 6.59358 4.75822 6.39635 4.75822C6.90716 4.26318 5.85399 4.14879 5.60746 3.77209C4.93098 3.9634 5.23865 4.02454 4.81856 4.36377C4.81856 4.23163 4.81856 4.10146 4.81856 3.96932C4.28211 4.11921 4.36889 4.01665 4.22689 4.56099C3.74763 4.68327 3.79299 4.77005 3.43799 4.95544C3.50307 5.74434 3.57013 6.53324 3.63521 7.32213C3.89752 7.25705 4.1618 7.18999 4.42411 7.12491C4.57006 6.47801 4.78897 6.36757 4.81856 5.54711C5.14792 5.54711 5.47532 5.54711 5.80468 5.54711C5.86976 5.74434 5.93682 5.94156 6.0019 6.13879Z"
      fill={fillColor ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1318 8.89982C11.0667 8.89982 10.9996 8.89982 10.9346 8.89982C10.9996 8.57045 11.0667 8.24306 11.1318 7.9137C10.9346 7.97878 10.7373 8.04584 10.5401 8.11092C10.4218 8.50537 10.5677 8.28053 10.3429 8.50537C10.3429 8.9649 10.3429 9.42641 10.3429 9.88594C10.1457 9.82086 9.94843 9.7538 9.75121 9.68872C9.63485 9.99047 9.59343 10.0102 9.55398 10.4776C9.4889 10.4776 9.42184 10.4776 9.35676 10.4776C9.2049 9.90566 9.24829 10.4342 9.35676 9.88594C9.02739 9.88594 8.7 9.88594 8.37064 9.88594C8.14777 10.4697 8.40219 10.1049 7.77896 10.0832C7.77896 9.95102 7.77896 9.82086 7.77896 9.68872C7.58174 9.68872 7.38452 9.68872 7.18729 9.68872C7.0374 9.10493 6.86779 9.20354 6.79284 8.50537C6.39839 8.44029 6.00395 8.37323 5.6095 8.30814C5.62922 9.1424 5.70614 9.33371 6.39839 9.49149C6.39839 9.49149 6.37078 10.2587 6.20117 9.88594C6.20117 9.82086 6.20117 9.7538 6.20117 9.68872C6.13609 9.68872 6.06903 9.68872 6.00395 9.68872C6.00395 9.88594 6.00395 10.0832 6.00395 10.2804C6.13609 10.3455 6.26625 10.4125 6.39839 10.4776C6.39839 10.5427 6.39839 10.6098 6.39839 10.6748C6.53053 10.6748 6.6607 10.6748 6.79284 10.6748C6.79284 10.7399 6.79284 10.807 6.79284 10.8721C7.14587 11.158 7.42791 11.3651 7.97619 11.4637C7.97619 11.5288 7.97619 11.5959 7.97619 11.661C8.04127 11.661 8.10833 11.661 8.17341 11.661C8.17341 11.5959 8.17341 11.5288 8.17341 11.4637C8.2385 11.4637 8.30555 11.4637 8.37064 11.4637C8.37064 11.5288 8.37064 11.5959 8.37064 11.661C8.63295 11.661 8.89723 11.661 9.15953 11.661C9.21476 11.6748 9.21279 11.9489 9.55398 11.8582C9.61907 11.726 9.68612 11.5959 9.75121 11.4637C9.88335 11.5288 10.0135 11.5959 10.1457 11.661C10.1457 11.5959 10.1457 11.5288 10.1457 11.4637C10.3429 11.3316 10.5401 11.2014 10.7373 11.0693C10.6722 10.9371 10.6052 10.807 10.5401 10.6748C10.6052 10.6748 10.6722 10.6748 10.7373 10.6748C10.9622 10.3435 10.8576 10.4007 11.329 10.2804C11.329 10.0832 11.329 9.88594 11.329 9.68872C11.4611 9.68872 11.5913 9.68872 11.7235 9.68872C11.6584 9.35935 11.5913 9.03196 11.5262 8.70259C11.1318 8.8229 11.3566 8.67696 11.1318 8.89982Z"
      fill={fillColor ?? "black"}
    />
  </svg>
);

export default HappyIcon;