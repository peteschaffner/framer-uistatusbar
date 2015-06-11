
/**
 * Module dependencies.
 */

var Label = require('framer-uilabel')

var dirname = __dirname === '/' ? '' : __dirname

/**
 * iOS status bar for your prototyping pleasure.
 *
 * @class
 * @param {Object} options
 * @param {string} options.style=dark - `dark` means "dark content"
 */

module.exports = class StatusBar extends Layer {
  constructor(options={}) {
    options.style = options.style || 'dark'

    var padding = 6
    var fontSize = `12px`
    var textColor = 'black'

    super(_.extend(options, {
      name: 'statusBar',
      width: Screen.width,
      height: 20,
      backgroundColor: 'transparent'
    }))

    var networkSignal = new Layer({
      name: 'networkSignal',
      superLayer: this,
      height: 6,
      width: 34,
      x: padding,
      midY: this.midY,
      image: `${dirname}/images/statusBarSignal.svg`
    })

    var networkName = new Label({
      name: 'networkName',
      superLayer: this,
      x: networkSignal.maxX + 4,
      midY: this.midY,
      text: 'Framer',
      fontSize: fontSize,
      color: textColor
    })

    var wifi = new Layer({
      name: 'wifi',
      superLayer: this,
      width: 14,
      height: 10,
      x: networkName.maxX + 4,
      midY: this.midY,
      image: `${dirname}/images/statusBarWifi.svg`
    })

    var time = new Label({
      name: 'time',
      superLayer: this,
      midX: this.midX,
      midY: this.midY,
      text: '9:41 AM',
      fontSize: fontSize,
      color: textColor
    })

    var battery = new Layer({
      name: 'battery',
      superLayer: this,
      width: 25,
      height: 10,
      maxX: this.width - padding,
      midY: this.midY,
      image: `${dirname}/images/statusBarBattery.svg`
    })

    var batteryPercentage = new Label({
      name: 'batteryPercentage',
      superLayer: this,
      text: '100%',
      maxX: battery.x - 3,
      midY: this.midY,
      fontSize: fontSize,
      color: textColor
    })

    this.style = options.style
  }

  get style() { return this._style }
  set style(value) {
    this._style = value
    this.invert = (value == 'dark') ? 0 : 100
  }
}
