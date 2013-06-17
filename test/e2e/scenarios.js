describe('index page', function() {
    beforeEach(function() {
        browser().navigateTo('/')
    });

    it ('redirect works', function() {
        expect(browser().location().url()).toBe('/');
    });

    it ('has directive greeting', function() {
        expect(element('hello').count()).toBe(1);
    });

    it ('has partial greeting', function() {
        expect(element('p.partial-hello').count()).toBe(1);
    });

    it ('has model greeting', function() {
        expect(element('p.model-hello').count()).toBe(1);
    });
});
