module.exports = ({ env }) => ({
    // ..
   'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms : {
          wrapBodyWithDataKey: true
        },
        hooks: {
          preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
          postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
        },
        contentTypeFilter: {
          mode: 'allow',
          uids: {
            'api::dialogue.dialogue': true,
            'api::interaction.interaction': true,
            'api::outcome.outcome': true,
            'api::particpant.participant': true,
            'api::profile.profile': true,
            'api::progress.progress': true,
            'api::scenario.scenario': true,
            'api::session.session': true,
            'api:trigger.trigger': true
            // 'api::category.category': {
            //   'GET':true,
            // }
          }
        },
        plugins: {
          ids: {
            'slugify': true,
          }
        }
      }
    },
    // ..
  });