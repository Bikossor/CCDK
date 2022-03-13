/**
 * This is a little test
 */
declare module Game {
  function Popup(message: string): void;
  function WriteSave(num?: number): void;
  function killShimmers(): void;

  const T: number;
  const drawT: number;
  const loopT: number;
  const fps: number;

  /**
   * Settings of Cookie Clicker
   */
  const prefs = {
    /**
     * particle effects : falling cookies etc
     */
    particles: 1,
    /**
     * numbers that pop up when clicking the cookie
     */
    numbers: 1,
    /**
     * save the game every minute or so
     */
    autosave: 1,
    /**
     * send an AJAX request to the server every 30 minutes (note : ignored)
     */
    autoupdate: 1,
    /**
     * display milk
     */
    milk: 1,
    /**
     * CSS shadow effects (might be heavy on some browsers)
     */
    fancy: 1,
    /**
     * warn before closing the window
     */
    warn: 0,
    /**
     * display cursors
     */
    cursors: 1,
    /**
     * make the game refresh less frequently when off-focus
     */
    focus: 1,
    /**
     * use old-style popups
     */
    popups: 0,
    /**
     * shorten numbers
     */
    format: 0,
    /**
     * notifications fade faster
     */
    notifs: 0,
    /**
     * animate buildings
     */
    animate: 1,
    /**
     * wobbly cookie
     */
    wobbly: 1,
    /**
     * alt monospace font for cookies
     */
    monospace: 0,
    /**
     * CSS filter effects (might be heavy on some browsers)
     */
    filters: 0,
    /**
     * use new cookie click sound
     */
    cookiesound: 1,
    /**
     * show crates around icons in stats
     */
    crates: 0,
    /**
     * use requestAnimationFrame to update drawing instead of fixed 30 fps setTimeout
     */
    altDraw: 0,
    /**
     * if true, show a "Have you backed up your save?" message on save load; set to false when save is exported
     */
    showBackupWarning: 1,
    /**
     * if true, show Mute buttons and the building master bar
     */
    extraButtons: 1,
    /**
     * if true, show a prompt before spending lumps
     */
    askLumps: 0,
    /**
     * if true, show patreon names for grandmas
     */
    customGrandmas: 1,
    /**
     * if true, game may show pause screen when timed out
     */
    timeout: 0,
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
