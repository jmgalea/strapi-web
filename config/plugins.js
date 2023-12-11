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
            'api::dialogue.dialogue': { 'GET':true, },
            'api::interaction.interaction': { 'GET':true, },
            'api::outcome.outcome': { 'GET':true, },
            'api::particpant.participant': { 'GET':true, },
            'api::profile.profile': { 'GET':true, },
            'api::progress.progress': { 'GET':true, },
            'api::scenario.scenario': { 'GET':true, },
            'api::session.session': { 'GET':true, },
            'api:trigger.trigger': { 'GET':true, }
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