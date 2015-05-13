
/**
 * Module dependencies.
 */

var Label = require('framer-uilabel')

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
    options.contentScale = options.contentScale || Framer.Device.contentScale

    var padding = 12 / options.contentScale
    var fontSize = `${24 / options.contentScale}px`

    super(_.extend(options, {
      name: 'statusBar',
      width: Framer.Screen.width / options.contentScale,
      height: 40 / options.contentScale,
      backgroundColor: 'transparent'
    }))

    var networkSignal = new Layer({
      name: 'networkSignal',
      superLayer: this,
      height: 12 / options.contentScale,
      width: 68 / options.contentScale,
      x: padding,
      midY: this.midY,
      image: './images/statusBarSignal.png'
    })

    var networkName = new Label({
      name: 'networkName',
      superLayer: this,
      x: networkSignal.maxX + 8 / options.contentScale,
      midY: this.midY,
      text: 'Framer',
      fontSize: fontSize,
      color: 'black'
    })

    var wifi = new Layer({
      name: 'wifi',
      superLayer: this,
      width: 28 / options.contentScale,
      height: 20 / options.contentScale,
      x: networkName.maxX + 8 / options.contentScale,
      midY: this.midY,
      image: './images/statusBarWifi.png'
    })

    var time = new Label({
      name: 'time',
      superLayer: this,
      midX: this.midX,
      midY: this.midY,
      text: '9:41 AM',
      fontSize: fontSize,
      color: 'black'
    })

    var battery = new Layer({
      name: 'battery',
      superLayer: this,
      width: 50 / options.contentScale,
      height: 20 / options.contentScale,
      maxX: this.width - padding,
      midY: this.midY,
      image: './images/statusBarBattery.png'
    })

    var batteryPercentage = new Label({
      name: 'batteryPercentage',
      superLayer: this,
      text: '100%',
      maxX: battery.x - 6 / options.contentScale,
      midY: this.midY,
      fontSize: fontSize,
      color: 'black'
    })

    this.style = options.style
  }

  get style() { return this._style }
  set style(value) {
    this._style = value
    this.invert = (value == 'dark') ? 0 : 100
  }
}
