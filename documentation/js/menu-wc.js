'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' :
                                            'id="xs-controllers-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' :
                                        'id="xs-injectables-links-module-AppModule-2b3febb12d3f98ff485793088b2a1cb0760c3f661385e135233f720d2c7fbae40686ee91f2918937c8922b3bb76e807f31e6e40e18c2f85002131d7370cfacaa"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' :
                                            'id="xs-controllers-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' :
                                        'id="xs-injectables-links-module-AuthModule-a3051359584741758d15d34f2f753e34572eb5ddf4a1b15fb7487a965d2f1dc032ab2b69a1c1935b38947068befaddc90be751df612e6a713a2a99e909edb7fd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                            'id="xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                        'id="xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' :
                                            'id="xs-controllers-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' :
                                        'id="xs-injectables-links-module-UsersModule-d5d65e69c32598b1ef5c505192182b1ecbbb5d46b28185edc1b668283a7ce4dd57682819e6c78c1789f73f7d6c98b88de276ba7c190fb1e8683f6d069b8da966"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});