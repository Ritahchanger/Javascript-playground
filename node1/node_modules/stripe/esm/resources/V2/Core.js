// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
import { EventDestinations } from './Core/EventDestinations.js';
import { Events } from './Core/Events.js';
export const Core = StripeResource.extend({
    constructor: function (...args) {
        StripeResource.apply(this, args);
        this.eventDestinations = new EventDestinations(...args);
        this.events = new Events(...args);
    },
});
