var Label = require('framer-uilabel')
var dirname = __dirname == '/' ? '.' : __dirname

module.exports = class StatusBar extends Layer {
  constructor(options={}) {
    options.theme = options.theme || 'black'
    options.contentScale = options.contentScale || Framer.Device.contentScale

    super(_.extend(options, {
      name: 'statusBar',
      width: Framer.Screen.width / options.contentScale,
      height: 40 / options.contentScale
      // backgroundColor: 'transparent'
    }))

    // Networks
    new Layer({
      name: 'network',
      superLayer: this,
      height: 12 / options.contentScale,
      width: 68 / options.contentScale,
      x: 12 / options.contentScale,
      image: `${dirname}/images/statusBarSignal.png`
    })

    new Label({
      name: 'time',
      superLayer: this,
      midX: this.midX,
      midY: this.midY,
      text: '9:41 AM',
      fontSize: '12px',
      backgroundColor: 'red'
    })
    //
    // new Layer({
    //   name: 'battery',
    //   superLayer: this,
    //   height: 20 / options.scale,
    //   width: 50 / options.scale,
    //   maxX: this.maxX - (12 / options.scale),
    //   image: __dirname + '/images/statusBarBattery.png'
    // })

    this.theme = options.theme
  }

  // get theme() { return this._theme }
  // set theme(value) {
  //   this._theme = value
  //   this.invert = (value == 'black') ? 0 : 100
  // }
}
