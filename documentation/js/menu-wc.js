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
                                            'data-bs-target="#controllers-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' : 'data-bs-target="#xs-controllers-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' :
                                            'id="xs-controllers-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' :
                                        'id="xs-injectables-links-module-AppModule-c3470a33524b8f44485bacfaddfb5bfb6863f6a9c7a86d25e86ffdb4b305559285dfbdfcf902ad482cd37d5a23607516b837c051dbcdb20b1e0260f49f2c1f49"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' :
                                            'id="xs-controllers-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' :
                                        'id="xs-injectables-links-module-AuthModule-c9efd12422378f3703b2b731bdebdb01bbfed275c335114869b104aa3f14de05e855ac430020a065ddfd3b998bbf1889f6f6e7443ab44377fc625712ed221e58"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-cd29299ff9bd22a3811da83d7931002a19618790ea090cc4d7dc2a537ecc7b063da4c042e0b2be90cce8f5cc81b83c1fac4959c7614ff7bb95a33bc8f6fb2c91"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' :
                                            'id="xs-controllers-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' :
                                        'id="xs-injectables-links-module-PostsModule-894f4bb99d24bb7320ce375d1a0ecea70b9058b4e81789970ceee734ccbd08ff6c95ecdb1ea95db12bd7efec620e3a943e376a4122fa0daa6be8693ad8e427f4"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-5aec16058daeea07721759fc9a64f604b3b239905121504718bd6f0df671bfc233f432d6d3fc73d7cd7873680423f568785044f8c1b79487d1e37f8f2841e300"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-5aec16058daeea07721759fc9a64f604b3b239905121504718bd6f0df671bfc233f432d6d3fc73d7cd7873680423f568785044f8c1b79487d1e37f8f2841e300"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-5aec16058daeea07721759fc9a64f604b3b239905121504718bd6f0df671bfc233f432d6d3fc73d7cd7873680423f568785044f8c1b79487d1e37f8f2841e300"' :
                                            'id="xs-controllers-links-module-TagsModule-5aec16058daeea07721759fc9a64f604b3b239905121504718bd6f0df671bfc233f432d6d3fc73d7cd7873680423f568785044f8c1b79487d1e37f8f2841e300"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' :
                                            'id="xs-controllers-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' :
                                        'id="xs-injectables-links-module-UsersModule-de08814587fed832bb99611c9cf12d2d6a86be1174d629b8ab684c7e52f3868dd66ef51b01662baaa588a458713ba8e3278ad656ae8684f9543b40ca989b1e2c"' }>
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
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/patchPostsDto.html" data-type="entity-link" >patchPostsDto</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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