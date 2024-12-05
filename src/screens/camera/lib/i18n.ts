import {TranslationModule} from 'shared/i18n'

export const cameraTranslations: TranslationModule = {
  en: {
    permissions: {
      title: 'Allow Instagram to access your camera and microphone',
      sections: {
        how_to_use: {
          title: "How you'll use this",
          description:
            'To take photos, record videos, and preview visual and audio effects.',
        },
        how_we_use: {
          title: "How we'll use this",
          description: 'To show you previews of visual and audio effects.',
        },
        settings: {
          title: 'How these settings work',
          description:
            "You can change your choices at any time in your device settings. If you allow access now, you won't have to allow it again.",
        },
      },
      actions: {
        continue: 'Continue',
      },
    },
  },
}
