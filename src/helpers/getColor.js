import UColor from '../constants/UColor'

function getColor(c) {
  switch (c) {
    case UColor.BLUE: return "rgb(5, 153, 204)"
    case UColor.RED: return "rgb(230, 0, 0)"
    case UColor.GREEN: return "rgb(0, 190, 0)"
    case UColor.YELLOW: return "rgb(255, 255, 0)"
    case UColor.ORANGE: return "rgb(255, 127, 0)"
    case UColor.PINK: return "rgb(255, 110, 180)"
    case UColor.PURPLE: return "rgb(175, 0, 210)"
    case UColor.GOLD: return "rgb(218, 165, 32)"
    case UColor.GRAY: return "rgb(150, 150, 150)"
    case UColor.DARK_BLUE: return "rgb(0, 0, 220)"
    case UColor.SKY: return "rgb(0, 110, 210)"
    case UColor.CYAN: return "rgb(0, 215, 215)"
    case UColor.FLAME: return "rgb(210, 70, 0)"
    case UColor.ORCHID: return "rgb(210, 0, 210)"
    case UColor.HARLEQUIN: return "rgb(110, 210, 0)"
    case UColor.LIME: return "rgb(160, 210, 0)"
    default: return "rgb(5, 153, 204)"
  }
}

export default getColor
