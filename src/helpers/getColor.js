import UColor from '../constants/UColor'
const Color = require('color')

function getColor(c) {
  switch (c) {
    case UColor.BLUE: return Color.rgb(5, 153, 204)
    case UColor.RED: return Color.rgb(230, 0, 0)
    case UColor.GREEN: return Color.rgb(0, 190, 0)
    case UColor.YELLOW: return Color.rgb(255, 255, 0)
    case UColor.ORANGE: return Color.rgb(255, 127, 0)
    case UColor.PINK: return Color.rgb(255, 110, 180)
    case UColor.PURPLE: return Color.rgb(175, 0, 210)
    case UColor.GOLD: return Color.rgb(218, 165, 32)
    case UColor.GRAY: return Color.rgb(150, 150, 150)
    case UColor.DARK_BLUE: return Color.rgb(0, 0, 220)
    case UColor.SKY: return Color.rgb(0, 110, 210)
    case UColor.CYAN: return Color.rgb(0, 215, 215)
    case UColor.FLAME: return Color.rgb(210, 70, 0)
    case UColor.ORCHID: return Color.rgb(210, 0, 210)
    case UColor.HARLEQUIN: return Color.rgb(110, 210, 0)
    case UColor.LIME: return Color.rgb(160, 210, 0)
    default: return Color.rgb(5, 153, 204)
  }
}

export default getColor
