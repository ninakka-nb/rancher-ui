import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
  globalStore: service(),

  model(params) {
    const store = this.globalStore;

    return hash({
      role:     store.find('projectroletemplatebinding', params.role_id),
      roles:    store.find('roletemplate', null, {
        filter: {
          hidden:  false,
          context: 'cluster'
        }
      }),
    });
  },
});
