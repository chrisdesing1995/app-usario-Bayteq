export class AppConst {

  //#region RUTAS
  public static readonly Home: string = '/home';
  public static readonly userList: string = '/home/userList';
  public static readonly Profile: string = '/home/profile';
  public static readonly favorite: string = '/home/favoriteUser';
  public static readonly LoginPage: string = '/login';
  //#endregion

  //#region MSJ DE ESTADOS Y LOADING
  public static readonly Update: string = 'Modificando...';
  public static readonly Save: string = 'Guardando...';
  public static readonly Loading: string = 'Cargando...';
  public static readonly Login: string = 'Iniciando...';
  public static readonly Delete: string = 'Eliminando...';
  //#endregion

  //#region NAME COLORS
  public static readonly SuccessColor: string = 'success';
  public static readonly DangerColor: string = 'danger';
  public static readonly WarningColor: string = 'warning';
  public static readonly SecondaryColor: string = 'secondary';
  //#endregion
}
