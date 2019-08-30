


/**
 * Basic signal event handler
 * @see https://docs.yorg.app/classes/signal.html
 */
interface Signal {

    /**
     * Adds a new signal listener. The receiver can return 'stop_propagation' to
     * cancel further dispatching of the event.
     * @param {function(...args):('stop_propagation'|void)} receiver The receiver method
     * @param {object} scope Optional bound this parameter
     */
    add(receiver, scope?);

    /**
     * Dispatches the signal with the given payload
     * @param  {...any} payload
     */
    dispatch(...payload);

    /**
     * Removes a receiver
     * @param {object} receiver
     */
    remove(receiver);

    /**
     * Removes all receivers
     */
    removeAll();
}


/**
 * Basic sprite typedef of the engine
 * @see https://docs.yorg.app/classes/basesprite.html
 */
interface BaseSprite {
    w: number;
    h: number;
    sprite: HTMLImageElement | HTMLCanvasElement;
}

/**
 * Regular sprite object, this is less efficient than atlas sprites, but having
 * atlas for mods seems overkill.
 * @see https://docs.yorg.app/classes/regularsprite.html
 */

interface RegularSprite extends BaseSprite {
    draw(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number);
}

/**
 * Vector class
 * @see https://docs.yorg.app/classes/vector.html
 */
interface Vector {
    x: number;
    y: number;
}


/**
 * Rectangle class
 * @see https://docs.yorg.app/classes/rectangle.html
 */
interface Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;

    // It actually has much more methods, let me know if you need any of them here (be sure to check the docs)

    left(): number;
    right(): number;
    top(): number;
    bottom(): number;

}


/**
 * Passed to every draw method
 * @see https://docs.yorg.app/classes/drawparameters.html
 */
interface DrawParameters {
    context: CanvasRenderingContext2D;
    visibleRect: Rectangle;
    zoomFactor: number;
}


/**
 * @see https://docs.yorg.app/classes/faction.html
 */
interface BaseFaction {
}

/**
 * @see https://docs.yorg.app/classes/component.html
 */
interface Component {

}

/**
 * @see https://docs.yorg.app/classes/entitycomponentstorage.html
 */
interface EntityComponentStorage {
}



/**
 * @see https://docs.yorg.app/classes/entity.html
 */
interface Entity {
    x: number;
    y: number;
    uid: number;
    root: GameRoot;
    faction: BaseFaction;
    meta: any;
    components: EntityComponentStorage;
    registered: boolean;
    destroyed: boolean;
    queuedForDestroy: boolean;
    destroyReason: string;

    getFactionId(): string;
    isAlive(): boolean;
    getMetaclass(): any;

    getTile(): Vector;
    getWorldPosition(): Vector;

    // For more properties and methods, see api docs
}


/**
 * @see https://docs.yorg.app/classes/entitymanager.html
 */
interface EntityManager {

    findByUid(uid: number, errorWhenNotFound?: boolean): Entity;
    getAllWithComponent(componentHandle: new () => Component): Array<Entity>;
    getAllWithComponentOfFaction(componentHandle: new () => Component, faction: BaseFaction): Array<Entity>;

    // For more properties and methods, see api docs
}


/**
 * Game root interface
 */
interface GameRoot {
    entityMgr: EntityManager;
}

/**
 * This is passed to all mods
 */
interface ModApi {

    /** 
     * Registers a new sprite which can be used for rendering. You should load all sprites *once*, and that
     * is during the mod loading
     * @param spriteId The id of the sprite. Notice that you should follow a naming convention, e.g. '@mymod/sprite1.png'
     * @param  sourceImage The sprite.
     */
    registerSprite(spriteId: string, sourceImage: HTMLImageElement | HTMLCanvasElement): RegularSprite;


    /**
     * Injects a new stylesheet, can be used to change the hud style or support new elements
     * @param css 
     */
    injectCss(css): void;


    /**
     * 
     * @param mod 
     */
    registerMod(mod: (root: GameRoot) => ModInstance): void;

}

/**
 * Make a class for your mod which derives from this. It will get instantiated for every new game,
 * so you can store game-state related stuff here
 */
interface ModInstance {


    /**
     * Draw stuff below buildings, e.g. a radius indicator or so. We are working in world space here,
     * every tile in the game is 48 pixels wide. 
     */
    drawUnderlays(params: DrawParameters);

    /**
     * Draw stuff above buildings, world space.
     */
    draw(params: DrawParameters);

    /**
     * Draw screen overlays, this is screen space (0, 0) to (window.innerWidth, window.innerHeight)
     */
    drawOverlays(params: DrawParameters);


}

/**
 * This is your main mod function
 */
interface ModMainFunction {

    name: string;
    version: string;
    author: string;

    /**
     * Should instantiate the mod and return a promise when its done
     */
    (api: ModApi): Promise<boolean>;
}


interface Window {
    registerMod(ModMainFunction): void;
}
