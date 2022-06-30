/**
 * This is a little test
 */
declare module Game {
  function Popup(message: string): void;
  function WriteSave(num?: number): void;
  function killShimmers(): void;
  function registerMod(
    name: string,
    object: {
      init?: () => void;
      save?: () => string;
      load?: (data: string) => void;
    }
  ): void;
  type HookName = "logic" | "draw" | "reset" | "reincarnate" | "ticker" | "cps" | "cookiesPerClick" | "click" | "create" | "check";
  function registerHook(hookName: HookName, hookFunction: () => {}): void;

  function Notify(title: string, desc: string, pic?: string | number | number[], quick?: number, noLog?: boolean): void;

  const T: number;
  const drawT: number;
  const loopT: number;
  const fps: number;

  /**
   * Settings of Cookie Clicker
   */
  const prefs: {
    /**
     * particle effects : falling cookies etc
     */
    particles: 0 | 1,
    /**
     * numbers that pop up when clicking the cookie
     */
    numbers: 0 | 1,
    /**
     * save the game every minute or so
     */
    autosave: 0 | 1,
    /**
     * send an AJAX request to the server every 30 minutes (note : ignored)
     */
    autoupdate: 0 | 1,
    /**
     * display milk
     */
    milk: 0 | 1,
    /**
     * CSS shadow effects (might be heavy on some browsers)
     */
    fancy: 0 | 1,
    /**
     * warn before closing the window
     */
    warn: 0 | 1,
    /**
     * display cursors
     */
    cursors: 0 | 1,
    /**
     * make the game refresh less frequently when off-focus
     */
    focus: 0 | 1,
    /**
     * use old-style popups
     */
    popups: 0 | 1,
    /**
     * shorten numbers
     */
    format: 0 | 1,
    /**
     * notifications fade faster
     */
    notifs: 0 | 1,
    /**
     * animate buildings
     */
    animate: 0 | 1,
    /**
     * wobbly cookie
     */
    wobbly: 0 | 1,
    /**
     * alt monospace font for cookies
     */
    monospace: 0 | 1,
    /**
     * CSS filter effects (might be heavy on some browsers)
     */
    filters: 0 | 1,
    /**
     * use new cookie click sound
     */
    cookiesound: 0 | 1,
    /**
     * show crates around icons in stats
     */
    crates: 0 | 1,
    /**
     * use requestAnimationFrame to update drawing instead of fixed 30 fps setTimeout
     */
    altDraw: 0 | 1,
    /**
     * if true, show a "Have you backed up your save?" message on save load; set to false when save is exported
     */
    showBackupWarning: 0 | 1,
    /**
     * if true, show Mute buttons and the building master bar
     */
    extraButtons: 0 | 1,
    /**
     * if true, show a prompt before spending lumps
     */
    askLumps: 0 | 1,
    /**
     * if true, show patreon names for grandmas
     */
    customGrandmas: 0 | 1,
    /**
     * if true, game may show pause screen when timed out
     */
    timeout: 0 | 1,
  };

  /**
   * all cookies earned during gameplay
   */
  const cookiesEarned: number;
  /**
   * cookies
   */
  const cookies: number;
  /**
   * cookies display
   */
  const cookiesd: number;
  /**
   * cookies per second (to recalculate with every new purchase)
   */
  const cookiesPs: number;
  const cookiesPsRaw: number;
  const cookiesPsRawHighest: number;
  const cookiesReset: number;
  const cookieClicks: number;
  const goldenClicks: number;
  const goldenClicksLocal: number;
  const missedGoldenClicks: number;
  const handmadeCookies: number;
  const milkProgress: number;
  const milkH: number;
  const milkHd: number;
  const milkType: number;
  const bgType: number;
  const chimeType: number;
  const prestige: number;
  const heavenlyChips: number;
  const heavenlyChipsDisplayed: number;
  const heavenlyChipsSpent: number;
  const heavenlyCookies: number;
  const permanentUpgrades: Array<number>;
  const ascensionMode: number;
  const resets: number;
  const lumps: number;
  const lumpsTotal: number;
  const lumpT: number;
  const lumpRefill: number;

  function LoadMod(s: string): string;

  function Win(achievement: string): void;

  function Unlock(upgrade: string): void;

  function Has(str: string): boolean;

  const modSaveData: Map<string, string>;

  function l(what: string): HTMLElement | null;
  
  function choose<T>(arr: Array<T>): T;

  function escapeRegExp(str: string): string;
  function replaceAll(find: string, replace: string, str: string): string;

  function randomFloor(x: number): number;

  function shuffle<T>(array: Array<T>): Array<T>;

  function Beautify(val: number, floats: number): string;
}
