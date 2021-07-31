import Model from 'flarum/common/Model';
import Forum from 'flarum/common/models/Forum';

import Webhook from './models/Webhook';
import WebhooksPage from './components/WebhooksPage';

app.initializers.add('fof/webhooks', () => {
    app.store.models.webhooks = Webhook;

    Forum.prototype.webhooks = Model.hasMany('nct-webhooks');

    app.extensionData.for('fof-webhooks').registerPage(WebhooksPage);
});
