const {withAndroidStyles} = require('@expo/config-plugins')

/**
 * A config plugin to add custom styles to Android styles.xml
 * IMPORTANT: This plugin must be placed BEFORE react-native-bootsplash in the plugins array in app.json
 * because react-native-bootsplash overwrites styles rather than merging them.
 * @see https://github.com/zoontek/react-native-bootsplash/issues/650 for more details and tracking
 * of this limitation.
 */
module.exports = function withCustomStyles(config) {
  return withAndroidStyles(config, (config) => {
    let styles = config.modResults

    // Find the BootTheme style and add our custom items
    const bootThemeStyle = styles.resources.style.find(
      (style) => style.$.name === 'BootTheme',
    )

    if (bootThemeStyle) {
      // Check and add statusBarColor
      if (
        !bootThemeStyle.item.find(
          (item) => item.$.name === 'android:statusBarColor',
        )
      ) {
        bootThemeStyle.item.push({
          $: {name: 'android:statusBarColor'},
          _: '@color/bootsplash_background',
        })
      }

      // Check and add navigationBarColor
      if (
        !bootThemeStyle.item.find(
          (item) => item.$.name === 'android:navigationBarColor',
        )
      ) {
        bootThemeStyle.item.push({
          $: {name: 'android:navigationBarColor'},
          _: '@color/bootsplash_background',
        })
      }
    }

    return config
  })
}
