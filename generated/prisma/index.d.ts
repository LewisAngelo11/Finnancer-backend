
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model balance
 * 
 */
export type balance = $Result.DefaultSelection<Prisma.$balancePayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model notificacion
 * 
 */
export type notificacion = $Result.DefaultSelection<Prisma.$notificacionPayload>
/**
 * Model perfil
 * 
 */
export type perfil = $Result.DefaultSelection<Prisma.$perfilPayload>
/**
 * Model persona
 * 
 */
export type persona = $Result.DefaultSelection<Prisma.$personaPayload>
/**
 * Model subcategoria
 * 
 */
export type subcategoria = $Result.DefaultSelection<Prisma.$subcategoriaPayload>
/**
 * Model transaccion
 * 
 */
export type transaccion = $Result.DefaultSelection<Prisma.$transaccionPayload>
/**
 * Model transaccion_cuota
 * 
 */
export type transaccion_cuota = $Result.DefaultSelection<Prisma.$transaccion_cuotaPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model verificacion
 * 
 */
export type verificacion = $Result.DefaultSelection<Prisma.$verificacionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estatus: {
  activo: 'activo',
  baja: 'baja'
};

export type estatus = (typeof estatus)[keyof typeof estatus]


export const estatus_transaccion: {
  pendiente: 'pendiente',
  pagada: 'pagada',
  cancelada: 'cancelada'
};

export type estatus_transaccion = (typeof estatus_transaccion)[keyof typeof estatus_transaccion]


export const flujo_efectivo: {
  efectivo: 'efectivo',
  cuenta_por_cobrar: 'cuenta_por_cobrar',
  cuenta_por_pagar: 'cuenta_por_pagar'
};

export type flujo_efectivo = (typeof flujo_efectivo)[keyof typeof flujo_efectivo]


export const tipo_movimiento: {
  ingreso: 'ingreso',
  egreso: 'egreso'
};

export type tipo_movimiento = (typeof tipo_movimiento)[keyof typeof tipo_movimiento]


export const tipo_persona: {
  cliente: 'cliente',
  proveedor: 'proveedor'
};

export type tipo_persona = (typeof tipo_persona)[keyof typeof tipo_persona]

}

export type estatus = $Enums.estatus

export const estatus: typeof $Enums.estatus

export type estatus_transaccion = $Enums.estatus_transaccion

export const estatus_transaccion: typeof $Enums.estatus_transaccion

export type flujo_efectivo = $Enums.flujo_efectivo

export const flujo_efectivo: typeof $Enums.flujo_efectivo

export type tipo_movimiento = $Enums.tipo_movimiento

export const tipo_movimiento: typeof $Enums.tipo_movimiento

export type tipo_persona = $Enums.tipo_persona

export const tipo_persona: typeof $Enums.tipo_persona

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Balances
 * const balances = await prisma.balance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Balances
   * const balances = await prisma.balance.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.balance`: Exposes CRUD operations for the **balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.balanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacion`: Exposes CRUD operations for the **notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacions
    * const notificacions = await prisma.notificacion.findMany()
    * ```
    */
  get notificacion(): Prisma.notificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.perfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.personaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategoria`: Exposes CRUD operations for the **subcategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategorias
    * const subcategorias = await prisma.subcategoria.findMany()
    * ```
    */
  get subcategoria(): Prisma.subcategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaccion`: Exposes CRUD operations for the **transaccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaccions
    * const transaccions = await prisma.transaccion.findMany()
    * ```
    */
  get transaccion(): Prisma.transaccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaccion_cuota`: Exposes CRUD operations for the **transaccion_cuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaccion_cuotas
    * const transaccion_cuotas = await prisma.transaccion_cuota.findMany()
    * ```
    */
  get transaccion_cuota(): Prisma.transaccion_cuotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificacion`: Exposes CRUD operations for the **verificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verificacions
    * const verificacions = await prisma.verificacion.findMany()
    * ```
    */
  get verificacion(): Prisma.verificacionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    balance: 'balance',
    categoria: 'categoria',
    notificacion: 'notificacion',
    perfil: 'perfil',
    persona: 'persona',
    subcategoria: 'subcategoria',
    transaccion: 'transaccion',
    transaccion_cuota: 'transaccion_cuota',
    usuario: 'usuario',
    verificacion: 'verificacion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "balance" | "categoria" | "notificacion" | "perfil" | "persona" | "subcategoria" | "transaccion" | "transaccion_cuota" | "usuario" | "verificacion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      balance: {
        payload: Prisma.$balancePayload<ExtArgs>
        fields: Prisma.balanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.balanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.balanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findFirst: {
            args: Prisma.balanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.balanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findMany: {
            args: Prisma.balanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          create: {
            args: Prisma.balanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          createMany: {
            args: Prisma.balanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.balanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          delete: {
            args: Prisma.balanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          update: {
            args: Prisma.balanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          deleteMany: {
            args: Prisma.balanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.balanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.balanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          upsert: {
            args: Prisma.balanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.balanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.balanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      notificacion: {
        payload: Prisma.$notificacionPayload<ExtArgs>
        fields: Prisma.notificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findFirst: {
            args: Prisma.notificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          findMany: {
            args: Prisma.notificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          create: {
            args: Prisma.notificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          createMany: {
            args: Prisma.notificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          delete: {
            args: Prisma.notificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          update: {
            args: Prisma.notificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          deleteMany: {
            args: Prisma.notificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>[]
          }
          upsert: {
            args: Prisma.notificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionPayload>
          }
          aggregate: {
            args: Prisma.NotificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacion>
          }
          groupBy: {
            args: Prisma.notificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificacionCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionCountAggregateOutputType> | number
          }
        }
      }
      perfil: {
        payload: Prisma.$perfilPayload<ExtArgs>
        fields: Prisma.perfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.perfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.perfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          findFirst: {
            args: Prisma.perfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.perfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          findMany: {
            args: Prisma.perfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>[]
          }
          create: {
            args: Prisma.perfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          createMany: {
            args: Prisma.perfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.perfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>[]
          }
          delete: {
            args: Prisma.perfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          update: {
            args: Prisma.perfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          deleteMany: {
            args: Prisma.perfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.perfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.perfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>[]
          }
          upsert: {
            args: Prisma.perfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.perfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.perfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      persona: {
        payload: Prisma.$personaPayload<ExtArgs>
        fields: Prisma.personaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findFirst: {
            args: Prisma.personaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findMany: {
            args: Prisma.personaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          create: {
            args: Prisma.personaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          createMany: {
            args: Prisma.personaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          delete: {
            args: Prisma.personaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          update: {
            args: Prisma.personaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          deleteMany: {
            args: Prisma.personaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          upsert: {
            args: Prisma.personaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.personaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.personaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      subcategoria: {
        payload: Prisma.$subcategoriaPayload<ExtArgs>
        fields: Prisma.subcategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subcategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subcategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          findFirst: {
            args: Prisma.subcategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subcategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          findMany: {
            args: Prisma.subcategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>[]
          }
          create: {
            args: Prisma.subcategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          createMany: {
            args: Prisma.subcategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subcategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>[]
          }
          delete: {
            args: Prisma.subcategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          update: {
            args: Prisma.subcategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          deleteMany: {
            args: Prisma.subcategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subcategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subcategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>[]
          }
          upsert: {
            args: Prisma.subcategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subcategoriaPayload>
          }
          aggregate: {
            args: Prisma.SubcategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategoria>
          }
          groupBy: {
            args: Prisma.subcategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.subcategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoriaCountAggregateOutputType> | number
          }
        }
      }
      transaccion: {
        payload: Prisma.$transaccionPayload<ExtArgs>
        fields: Prisma.transaccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          findFirst: {
            args: Prisma.transaccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          findMany: {
            args: Prisma.transaccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>[]
          }
          create: {
            args: Prisma.transaccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          createMany: {
            args: Prisma.transaccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>[]
          }
          delete: {
            args: Prisma.transaccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          update: {
            args: Prisma.transaccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          deleteMany: {
            args: Prisma.transaccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>[]
          }
          upsert: {
            args: Prisma.transaccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccionPayload>
          }
          aggregate: {
            args: Prisma.TransaccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccion>
          }
          groupBy: {
            args: Prisma.transaccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaccionCountArgs<ExtArgs>
            result: $Utils.Optional<TransaccionCountAggregateOutputType> | number
          }
        }
      }
      transaccion_cuota: {
        payload: Prisma.$transaccion_cuotaPayload<ExtArgs>
        fields: Prisma.transaccion_cuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaccion_cuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaccion_cuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          findFirst: {
            args: Prisma.transaccion_cuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaccion_cuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          findMany: {
            args: Prisma.transaccion_cuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>[]
          }
          create: {
            args: Prisma.transaccion_cuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          createMany: {
            args: Prisma.transaccion_cuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaccion_cuotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>[]
          }
          delete: {
            args: Prisma.transaccion_cuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          update: {
            args: Prisma.transaccion_cuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          deleteMany: {
            args: Prisma.transaccion_cuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaccion_cuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaccion_cuotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>[]
          }
          upsert: {
            args: Prisma.transaccion_cuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaccion_cuotaPayload>
          }
          aggregate: {
            args: Prisma.Transaccion_cuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaccion_cuota>
          }
          groupBy: {
            args: Prisma.transaccion_cuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaccion_cuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaccion_cuotaCountArgs<ExtArgs>
            result: $Utils.Optional<Transaccion_cuotaCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      verificacion: {
        payload: Prisma.$verificacionPayload<ExtArgs>
        fields: Prisma.verificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          findFirst: {
            args: Prisma.verificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          findMany: {
            args: Prisma.verificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>[]
          }
          create: {
            args: Prisma.verificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          createMany: {
            args: Prisma.verificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>[]
          }
          delete: {
            args: Prisma.verificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          update: {
            args: Prisma.verificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          deleteMany: {
            args: Prisma.verificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>[]
          }
          upsert: {
            args: Prisma.verificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verificacionPayload>
          }
          aggregate: {
            args: Prisma.VerificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificacion>
          }
          groupBy: {
            args: Prisma.verificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.verificacionCountArgs<ExtArgs>
            result: $Utils.Optional<VerificacionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    balance?: balanceOmit
    categoria?: categoriaOmit
    notificacion?: notificacionOmit
    perfil?: perfilOmit
    persona?: personaOmit
    subcategoria?: subcategoriaOmit
    transaccion?: transaccionOmit
    transaccion_cuota?: transaccion_cuotaOmit
    usuario?: usuarioOmit
    verificacion?: verificacionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    subcategoria: number
    transaccion: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategoria?: boolean | CategoriaCountOutputTypeCountSubcategoriaArgs
    transaccion?: boolean | CategoriaCountOutputTypeCountTransaccionArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSubcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriaWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
  }


  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    notificacion: number
    transaccion: number
  }

  export type PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacion?: boolean | PerfilCountOutputTypeCountNotificacionArgs
    transaccion?: boolean | PerfilCountOutputTypeCountTransaccionArgs
  }

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountNotificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    transaccion: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion?: boolean | PersonaCountOutputTypeCountTransaccionArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
  }


  /**
   * Count Type SubcategoriaCountOutputType
   */

  export type SubcategoriaCountOutputType = {
    transaccion: number
  }

  export type SubcategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion?: boolean | SubcategoriaCountOutputTypeCountTransaccionArgs
  }

  // Custom InputTypes
  /**
   * SubcategoriaCountOutputType without action
   */
  export type SubcategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoriaCountOutputType
     */
    select?: SubcategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoriaCountOutputType without action
   */
  export type SubcategoriaCountOutputTypeCountTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
  }


  /**
   * Count Type TransaccionCountOutputType
   */

  export type TransaccionCountOutputType = {
    transaccion_cuota: number
  }

  export type TransaccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion_cuota?: boolean | TransaccionCountOutputTypeCountTransaccion_cuotaArgs
  }

  // Custom InputTypes
  /**
   * TransaccionCountOutputType without action
   */
  export type TransaccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaccionCountOutputType
     */
    select?: TransaccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaccionCountOutputType without action
   */
  export type TransaccionCountOutputTypeCountTransaccion_cuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccion_cuotaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    balance: number
    categoria: number
    notificacion: number
    perfil: number
    persona: number
    subcategoria: number
    transaccion: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balance?: boolean | UsuarioCountOutputTypeCountBalanceArgs
    categoria?: boolean | UsuarioCountOutputTypeCountCategoriaArgs
    notificacion?: boolean | UsuarioCountOutputTypeCountNotificacionArgs
    perfil?: boolean | UsuarioCountOutputTypeCountPerfilArgs
    persona?: boolean | UsuarioCountOutputTypeCountPersonaArgs
    subcategoria?: boolean | UsuarioCountOutputTypeCountSubcategoriaArgs
    transaccion?: boolean | UsuarioCountOutputTypeCountTransaccionArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balanceWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: perfilWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSubcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTransaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id_balance: number | null
    total_ingreso: Decimal | null
    total_egreso: Decimal | null
    resultado_neto: Decimal | null
    presupuesto: Decimal | null
    ahorro_mensual: Decimal | null
    resultado_final: Decimal | null
    id_usuario: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id_balance: number | null
    total_ingreso: Decimal | null
    total_egreso: Decimal | null
    resultado_neto: Decimal | null
    presupuesto: Decimal | null
    ahorro_mensual: Decimal | null
    resultado_final: Decimal | null
    id_usuario: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id_balance: number | null
    total_ingreso: Decimal | null
    total_egreso: Decimal | null
    resultado_neto: Decimal | null
    presupuesto: Decimal | null
    ahorro_mensual: Decimal | null
    resultado_final: Decimal | null
    id_usuario: number | null
  }

  export type BalanceMaxAggregateOutputType = {
    id_balance: number | null
    total_ingreso: Decimal | null
    total_egreso: Decimal | null
    resultado_neto: Decimal | null
    presupuesto: Decimal | null
    ahorro_mensual: Decimal | null
    resultado_final: Decimal | null
    id_usuario: number | null
  }

  export type BalanceCountAggregateOutputType = {
    id_balance: number
    total_ingreso: number
    total_egreso: number
    resultado_neto: number
    presupuesto: number
    ahorro_mensual: number
    resultado_final: number
    id_usuario: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id_balance?: true
    total_ingreso?: true
    total_egreso?: true
    resultado_neto?: true
    presupuesto?: true
    ahorro_mensual?: true
    resultado_final?: true
    id_usuario?: true
  }

  export type BalanceSumAggregateInputType = {
    id_balance?: true
    total_ingreso?: true
    total_egreso?: true
    resultado_neto?: true
    presupuesto?: true
    ahorro_mensual?: true
    resultado_final?: true
    id_usuario?: true
  }

  export type BalanceMinAggregateInputType = {
    id_balance?: true
    total_ingreso?: true
    total_egreso?: true
    resultado_neto?: true
    presupuesto?: true
    ahorro_mensual?: true
    resultado_final?: true
    id_usuario?: true
  }

  export type BalanceMaxAggregateInputType = {
    id_balance?: true
    total_ingreso?: true
    total_egreso?: true
    resultado_neto?: true
    presupuesto?: true
    ahorro_mensual?: true
    resultado_final?: true
    id_usuario?: true
  }

  export type BalanceCountAggregateInputType = {
    id_balance?: true
    total_ingreso?: true
    total_egreso?: true
    resultado_neto?: true
    presupuesto?: true
    ahorro_mensual?: true
    resultado_final?: true
    id_usuario?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balance to aggregate.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type balanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balanceWhereInput
    orderBy?: balanceOrderByWithAggregationInput | balanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: balanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id_balance: number
    total_ingreso: Decimal
    total_egreso: Decimal
    resultado_neto: Decimal
    presupuesto: Decimal
    ahorro_mensual: Decimal
    resultado_final: Decimal
    id_usuario: number | null
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends balanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type balanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_balance?: boolean
    total_ingreso?: boolean
    total_egreso?: boolean
    resultado_neto?: boolean
    presupuesto?: boolean
    ahorro_mensual?: boolean
    resultado_final?: boolean
    id_usuario?: boolean
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_balance?: boolean
    total_ingreso?: boolean
    total_egreso?: boolean
    resultado_neto?: boolean
    presupuesto?: boolean
    ahorro_mensual?: boolean
    resultado_final?: boolean
    id_usuario?: boolean
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_balance?: boolean
    total_ingreso?: boolean
    total_egreso?: boolean
    resultado_neto?: boolean
    presupuesto?: boolean
    ahorro_mensual?: boolean
    resultado_final?: boolean
    id_usuario?: boolean
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectScalar = {
    id_balance?: boolean
    total_ingreso?: boolean
    total_egreso?: boolean
    resultado_neto?: boolean
    presupuesto?: boolean
    ahorro_mensual?: boolean
    resultado_final?: boolean
    id_usuario?: boolean
  }

  export type balanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_balance" | "total_ingreso" | "total_egreso" | "resultado_neto" | "presupuesto" | "ahorro_mensual" | "resultado_final" | "id_usuario", ExtArgs["result"]["balance"]>
  export type balanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }
  export type balanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }
  export type balanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | balance$usuarioArgs<ExtArgs>
  }

  export type $balancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "balance"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_balance: number
      total_ingreso: Prisma.Decimal
      total_egreso: Prisma.Decimal
      resultado_neto: Prisma.Decimal
      presupuesto: Prisma.Decimal
      ahorro_mensual: Prisma.Decimal
      resultado_final: Prisma.Decimal
      id_usuario: number | null
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type balanceGetPayload<S extends boolean | null | undefined | balanceDefaultArgs> = $Result.GetResult<Prisma.$balancePayload, S>

  type balanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<balanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface balanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['balance'], meta: { name: 'balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {balanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends balanceFindUniqueArgs>(args: SelectSubset<T, balanceFindUniqueArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {balanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends balanceFindUniqueOrThrowArgs>(args: SelectSubset<T, balanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends balanceFindFirstArgs>(args?: SelectSubset<T, balanceFindFirstArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends balanceFindFirstOrThrowArgs>(args?: SelectSubset<T, balanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id_balance`
     * const balanceWithId_balanceOnly = await prisma.balance.findMany({ select: { id_balance: true } })
     * 
     */
    findMany<T extends balanceFindManyArgs>(args?: SelectSubset<T, balanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {balanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends balanceCreateArgs>(args: SelectSubset<T, balanceCreateArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {balanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends balanceCreateManyArgs>(args?: SelectSubset<T, balanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {balanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id_balance`
     * const balanceWithId_balanceOnly = await prisma.balance.createManyAndReturn({
     *   select: { id_balance: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends balanceCreateManyAndReturnArgs>(args?: SelectSubset<T, balanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {balanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends balanceDeleteArgs>(args: SelectSubset<T, balanceDeleteArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {balanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends balanceUpdateArgs>(args: SelectSubset<T, balanceUpdateArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {balanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends balanceDeleteManyArgs>(args?: SelectSubset<T, balanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends balanceUpdateManyArgs>(args: SelectSubset<T, balanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {balanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id_balance`
     * const balanceWithId_balanceOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id_balance: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends balanceUpdateManyAndReturnArgs>(args: SelectSubset<T, balanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {balanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends balanceUpsertArgs>(args: SelectSubset<T, balanceUpsertArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends balanceCountArgs>(
      args?: Subset<T, balanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends balanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: balanceGroupByArgs['orderBy'] }
        : { orderBy?: balanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, balanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the balance model
   */
  readonly fields: balanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__balanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends balance$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, balance$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the balance model
   */
  interface balanceFieldRefs {
    readonly id_balance: FieldRef<"balance", 'Int'>
    readonly total_ingreso: FieldRef<"balance", 'Decimal'>
    readonly total_egreso: FieldRef<"balance", 'Decimal'>
    readonly resultado_neto: FieldRef<"balance", 'Decimal'>
    readonly presupuesto: FieldRef<"balance", 'Decimal'>
    readonly ahorro_mensual: FieldRef<"balance", 'Decimal'>
    readonly resultado_final: FieldRef<"balance", 'Decimal'>
    readonly id_usuario: FieldRef<"balance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * balance findUnique
   */
  export type balanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance findUniqueOrThrow
   */
  export type balanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance findFirst
   */
  export type balanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance findFirstOrThrow
   */
  export type balanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance findMany
   */
  export type balanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance create
   */
  export type balanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The data needed to create a balance.
     */
    data: XOR<balanceCreateInput, balanceUncheckedCreateInput>
  }

  /**
   * balance createMany
   */
  export type balanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many balances.
     */
    data: balanceCreateManyInput | balanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * balance createManyAndReturn
   */
  export type balanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * The data used to create many balances.
     */
    data: balanceCreateManyInput | balanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * balance update
   */
  export type balanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The data needed to update a balance.
     */
    data: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
    /**
     * Choose, which balance to update.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance updateMany
   */
  export type balanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update balances.
     */
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
  }

  /**
   * balance updateManyAndReturn
   */
  export type balanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * The data used to update balances.
     */
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * balance upsert
   */
  export type balanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The filter to search for the balance to update in case it exists.
     */
    where: balanceWhereUniqueInput
    /**
     * In case the balance found by the `where` argument doesn't exist, create a new balance with this data.
     */
    create: XOR<balanceCreateInput, balanceUncheckedCreateInput>
    /**
     * In case the balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
  }

  /**
   * balance delete
   */
  export type balanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter which balance to delete.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance deleteMany
   */
  export type balanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to delete
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to delete.
     */
    limit?: number
  }

  /**
   * balance.usuario
   */
  export type balance$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * balance without action
   */
  export type balanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
    id_usuario: number | null
    icono: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
    id_usuario: number | null
    icono: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
    tipo: $Enums.tipo_movimiento | null
    estatus: $Enums.estatus | null
    flujo: $Enums.flujo_efectivo | null
    id_usuario: number | null
    mostrar_panel: boolean | null
    icono: number | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
    tipo: $Enums.tipo_movimiento | null
    estatus: $Enums.estatus | null
    flujo: $Enums.flujo_efectivo | null
    id_usuario: number | null
    mostrar_panel: boolean | null
    icono: number | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    tipo: number
    estatus: number
    flujo: number
    id_usuario: number
    mostrar_panel: number
    icono: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
    id_usuario?: true
    icono?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
    id_usuario?: true
    icono?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_usuario?: true
    mostrar_panel?: true
    icono?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_usuario?: true
    mostrar_panel?: true
    icono?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_usuario?: true
    mostrar_panel?: true
    icono?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus: $Enums.estatus
    flujo: $Enums.flujo_efectivo
    id_usuario: number | null
    mostrar_panel: boolean
    icono: number
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_usuario?: boolean
    mostrar_panel?: boolean
    icono?: boolean
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
    subcategoria?: boolean | categoria$subcategoriaArgs<ExtArgs>
    transaccion?: boolean | categoria$transaccionArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_usuario?: boolean
    mostrar_panel?: boolean
    icono?: boolean
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_usuario?: boolean
    mostrar_panel?: boolean
    icono?: boolean
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_usuario?: boolean
    mostrar_panel?: boolean
    icono?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre" | "tipo" | "estatus" | "flujo" | "id_usuario" | "mostrar_panel" | "icono", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
    subcategoria?: boolean | categoria$subcategoriaArgs<ExtArgs>
    transaccion?: boolean | categoria$transaccionArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
  }
  export type categoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | categoria$usuarioArgs<ExtArgs>
  }

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      subcategoria: Prisma.$subcategoriaPayload<ExtArgs>[]
      transaccion: Prisma.$transaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
      tipo: $Enums.tipo_movimiento
      estatus: $Enums.estatus
      flujo: $Enums.flujo_efectivo
      id_usuario: number | null
      mostrar_panel: boolean
      icono: number
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id_categoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends categoria$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, categoria$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategoria<T extends categoria$subcategoriaArgs<ExtArgs> = {}>(args?: Subset<T, categoria$subcategoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaccion<T extends categoria$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, categoria$transaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id_categoria: FieldRef<"categoria", 'Int'>
    readonly nombre: FieldRef<"categoria", 'String'>
    readonly tipo: FieldRef<"categoria", 'tipo_movimiento'>
    readonly estatus: FieldRef<"categoria", 'estatus'>
    readonly flujo: FieldRef<"categoria", 'flujo_efectivo'>
    readonly id_usuario: FieldRef<"categoria", 'Int'>
    readonly mostrar_panel: FieldRef<"categoria", 'Boolean'>
    readonly icono: FieldRef<"categoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria createManyAndReturn
   */
  export type categoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria updateManyAndReturn
   */
  export type categoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.usuario
   */
  export type categoria$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * categoria.subcategoria
   */
  export type categoria$subcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    where?: subcategoriaWhereInput
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    cursor?: subcategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoriaScalarFieldEnum | SubcategoriaScalarFieldEnum[]
  }

  /**
   * categoria.transaccion
   */
  export type categoria$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    cursor?: transaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model notificacion
   */

  export type AggregateNotificacion = {
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  export type NotificacionAvgAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_perfil: number | null
  }

  export type NotificacionSumAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
    id_perfil: number | null
  }

  export type NotificacionMinAggregateOutputType = {
    id_notificacion: number | null
    descripcion: string | null
    fecha_notificacion: Date | null
    id_usuario: number | null
    id_perfil: number | null
  }

  export type NotificacionMaxAggregateOutputType = {
    id_notificacion: number | null
    descripcion: string | null
    fecha_notificacion: Date | null
    id_usuario: number | null
    id_perfil: number | null
  }

  export type NotificacionCountAggregateOutputType = {
    id_notificacion: number
    descripcion: number
    fecha_notificacion: number
    id_usuario: number
    id_perfil: number
    _all: number
  }


  export type NotificacionAvgAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_perfil?: true
  }

  export type NotificacionSumAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    id_perfil?: true
  }

  export type NotificacionMinAggregateInputType = {
    id_notificacion?: true
    descripcion?: true
    fecha_notificacion?: true
    id_usuario?: true
    id_perfil?: true
  }

  export type NotificacionMaxAggregateInputType = {
    id_notificacion?: true
    descripcion?: true
    fecha_notificacion?: true
    id_usuario?: true
    id_perfil?: true
  }

  export type NotificacionCountAggregateInputType = {
    id_notificacion?: true
    descripcion?: true
    fecha_notificacion?: true
    id_usuario?: true
    id_perfil?: true
    _all?: true
  }

  export type NotificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacion to aggregate.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notificacions
    **/
    _count?: true | NotificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionMaxAggregateInputType
  }

  export type GetNotificacionAggregateType<T extends NotificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacion[P]>
      : GetScalarType<T[P], AggregateNotificacion[P]>
  }




  export type notificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithAggregationInput | notificacionOrderByWithAggregationInput[]
    by: NotificacionScalarFieldEnum[] | NotificacionScalarFieldEnum
    having?: notificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionCountAggregateInputType | true
    _avg?: NotificacionAvgAggregateInputType
    _sum?: NotificacionSumAggregateInputType
    _min?: NotificacionMinAggregateInputType
    _max?: NotificacionMaxAggregateInputType
  }

  export type NotificacionGroupByOutputType = {
    id_notificacion: number
    descripcion: string
    fecha_notificacion: Date
    id_usuario: number | null
    id_perfil: number | null
    _count: NotificacionCountAggregateOutputType | null
    _avg: NotificacionAvgAggregateOutputType | null
    _sum: NotificacionSumAggregateOutputType | null
    _min: NotificacionMinAggregateOutputType | null
    _max: NotificacionMaxAggregateOutputType | null
  }

  type GetNotificacionGroupByPayload<T extends notificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionGroupByOutputType[P]>
        }
      >
    >


  export type notificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    descripcion?: boolean
    fecha_notificacion?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    descripcion?: boolean
    fecha_notificacion?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    descripcion?: boolean
    fecha_notificacion?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["notificacion"]>

  export type notificacionSelectScalar = {
    id_notificacion?: boolean
    descripcion?: boolean
    fecha_notificacion?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
  }

  export type notificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notificacion" | "descripcion" | "fecha_notificacion" | "id_usuario" | "id_perfil", ExtArgs["result"]["notificacion"]>
  export type notificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }
  export type notificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }
  export type notificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | notificacion$perfilArgs<ExtArgs>
    usuario?: boolean | notificacion$usuarioArgs<ExtArgs>
  }

  export type $notificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notificacion"
    objects: {
      perfil: Prisma.$perfilPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notificacion: number
      descripcion: string
      fecha_notificacion: Date
      id_usuario: number | null
      id_perfil: number | null
    }, ExtArgs["result"]["notificacion"]>
    composites: {}
  }

  type notificacionGetPayload<S extends boolean | null | undefined | notificacionDefaultArgs> = $Result.GetResult<Prisma.$notificacionPayload, S>

  type notificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionCountAggregateInputType | true
    }

  export interface notificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notificacion'], meta: { name: 'notificacion' } }
    /**
     * Find zero or one Notificacion that matches the filter.
     * @param {notificacionFindUniqueArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificacionFindUniqueArgs>(args: SelectSubset<T, notificacionFindUniqueArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificacionFindUniqueOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificacionFindFirstArgs>(args?: SelectSubset<T, notificacionFindFirstArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindFirstOrThrowArgs} args - Arguments to find a Notificacion
     * @example
     * // Get one Notificacion
     * const notificacion = await prisma.notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacions
     * const notificacions = await prisma.notificacion.findMany()
     * 
     * // Get first 10 Notificacions
     * const notificacions = await prisma.notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.findMany({ select: { id_notificacion: true } })
     * 
     */
    findMany<T extends notificacionFindManyArgs>(args?: SelectSubset<T, notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacion.
     * @param {notificacionCreateArgs} args - Arguments to create a Notificacion.
     * @example
     * // Create one Notificacion
     * const Notificacion = await prisma.notificacion.create({
     *   data: {
     *     // ... data to create a Notificacion
     *   }
     * })
     * 
     */
    create<T extends notificacionCreateArgs>(args: SelectSubset<T, notificacionCreateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacions.
     * @param {notificacionCreateManyArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificacionCreateManyArgs>(args?: SelectSubset<T, notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacions and returns the data saved in the database.
     * @param {notificacionCreateManyAndReturnArgs} args - Arguments to create many Notificacions.
     * @example
     * // Create many Notificacions
     * const notificacion = await prisma.notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacions and only return the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.createManyAndReturn({
     *   select: { id_notificacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, notificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacion.
     * @param {notificacionDeleteArgs} args - Arguments to delete one Notificacion.
     * @example
     * // Delete one Notificacion
     * const Notificacion = await prisma.notificacion.delete({
     *   where: {
     *     // ... filter to delete one Notificacion
     *   }
     * })
     * 
     */
    delete<T extends notificacionDeleteArgs>(args: SelectSubset<T, notificacionDeleteArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacion.
     * @param {notificacionUpdateArgs} args - Arguments to update one Notificacion.
     * @example
     * // Update one Notificacion
     * const notificacion = await prisma.notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificacionUpdateArgs>(args: SelectSubset<T, notificacionUpdateArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacions.
     * @param {notificacionDeleteManyArgs} args - Arguments to filter Notificacions to delete.
     * @example
     * // Delete a few Notificacions
     * const { count } = await prisma.notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificacionDeleteManyArgs>(args?: SelectSubset<T, notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificacionUpdateManyArgs>(args: SelectSubset<T, notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacions and returns the data updated in the database.
     * @param {notificacionUpdateManyAndReturnArgs} args - Arguments to update many Notificacions.
     * @example
     * // Update many Notificacions
     * const notificacion = await prisma.notificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacions and only return the `id_notificacion`
     * const notificacionWithId_notificacionOnly = await prisma.notificacion.updateManyAndReturn({
     *   select: { id_notificacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, notificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacion.
     * @param {notificacionUpsertArgs} args - Arguments to update or create a Notificacion.
     * @example
     * // Update or create a Notificacion
     * const notificacion = await prisma.notificacion.upsert({
     *   create: {
     *     // ... data to create a Notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacion we want to update
     *   }
     * })
     */
    upsert<T extends notificacionUpsertArgs>(args: SelectSubset<T, notificacionUpsertArgs<ExtArgs>>): Prisma__notificacionClient<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionCountArgs} args - Arguments to filter Notificacions to count.
     * @example
     * // Count the number of Notificacions
     * const count = await prisma.notificacion.count({
     *   where: {
     *     // ... the filter for the Notificacions we want to count
     *   }
     * })
    **/
    count<T extends notificacionCountArgs>(
      args?: Subset<T, notificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacionAggregateArgs>(args: Subset<T, NotificacionAggregateArgs>): Prisma.PrismaPromise<GetNotificacionAggregateType<T>>

    /**
     * Group by Notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificacionGroupByArgs['orderBy'] }
        : { orderBy?: notificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notificacion model
   */
  readonly fields: notificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends notificacion$perfilArgs<ExtArgs> = {}>(args?: Subset<T, notificacion$perfilArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends notificacion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, notificacion$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notificacion model
   */
  interface notificacionFieldRefs {
    readonly id_notificacion: FieldRef<"notificacion", 'Int'>
    readonly descripcion: FieldRef<"notificacion", 'String'>
    readonly fecha_notificacion: FieldRef<"notificacion", 'DateTime'>
    readonly id_usuario: FieldRef<"notificacion", 'Int'>
    readonly id_perfil: FieldRef<"notificacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * notificacion findUnique
   */
  export type notificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findUniqueOrThrow
   */
  export type notificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion findFirst
   */
  export type notificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findFirstOrThrow
   */
  export type notificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacion to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificacions.
     */
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion findMany
   */
  export type notificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter, which notificacions to fetch.
     */
    where?: notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificacions to fetch.
     */
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notificacions.
     */
    cursor?: notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificacions.
     */
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * notificacion create
   */
  export type notificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a notificacion.
     */
    data: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
  }

  /**
   * notificacion createMany
   */
  export type notificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notificacions.
     */
    data: notificacionCreateManyInput | notificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notificacion createManyAndReturn
   */
  export type notificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * The data used to create many notificacions.
     */
    data: notificacionCreateManyInput | notificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificacion update
   */
  export type notificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a notificacion.
     */
    data: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
    /**
     * Choose, which notificacion to update.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion updateMany
   */
  export type notificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notificacions.
     */
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyInput>
    /**
     * Filter which notificacions to update
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to update.
     */
    limit?: number
  }

  /**
   * notificacion updateManyAndReturn
   */
  export type notificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * The data used to update notificacions.
     */
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyInput>
    /**
     * Filter which notificacions to update
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificacion upsert
   */
  export type notificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the notificacion to update in case it exists.
     */
    where: notificacionWhereUniqueInput
    /**
     * In case the notificacion found by the `where` argument doesn't exist, create a new notificacion with this data.
     */
    create: XOR<notificacionCreateInput, notificacionUncheckedCreateInput>
    /**
     * In case the notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificacionUpdateInput, notificacionUncheckedUpdateInput>
  }

  /**
   * notificacion delete
   */
  export type notificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    /**
     * Filter which notificacion to delete.
     */
    where: notificacionWhereUniqueInput
  }

  /**
   * notificacion deleteMany
   */
  export type notificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificacions to delete
     */
    where?: notificacionWhereInput
    /**
     * Limit how many notificacions to delete.
     */
    limit?: number
  }

  /**
   * notificacion.perfil
   */
  export type notificacion$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    where?: perfilWhereInput
  }

  /**
   * notificacion.usuario
   */
  export type notificacion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * notificacion without action
   */
  export type notificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
  }


  /**
   * Model perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id_perfil: number | null
    icono: number | null
    id_usuario: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id_perfil: number | null
    icono: number | null
    id_usuario: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id_perfil: number | null
    nombre: string | null
    icono: number | null
    fecha_creacion: Date | null
    estatus: $Enums.estatus | null
    id_usuario: number | null
    pin: string | null
    super_usuario: boolean | null
  }

  export type PerfilMaxAggregateOutputType = {
    id_perfil: number | null
    nombre: string | null
    icono: number | null
    fecha_creacion: Date | null
    estatus: $Enums.estatus | null
    id_usuario: number | null
    pin: string | null
    super_usuario: boolean | null
  }

  export type PerfilCountAggregateOutputType = {
    id_perfil: number
    nombre: number
    icono: number
    fecha_creacion: number
    estatus: number
    id_usuario: number
    pin: number
    super_usuario: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id_perfil?: true
    icono?: true
    id_usuario?: true
  }

  export type PerfilSumAggregateInputType = {
    id_perfil?: true
    icono?: true
    id_usuario?: true
  }

  export type PerfilMinAggregateInputType = {
    id_perfil?: true
    nombre?: true
    icono?: true
    fecha_creacion?: true
    estatus?: true
    id_usuario?: true
    pin?: true
    super_usuario?: true
  }

  export type PerfilMaxAggregateInputType = {
    id_perfil?: true
    nombre?: true
    icono?: true
    fecha_creacion?: true
    estatus?: true
    id_usuario?: true
    pin?: true
    super_usuario?: true
  }

  export type PerfilCountAggregateInputType = {
    id_perfil?: true
    nombre?: true
    icono?: true
    fecha_creacion?: true
    estatus?: true
    id_usuario?: true
    pin?: true
    super_usuario?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfil to aggregate.
     */
    where?: perfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfils to fetch.
     */
    orderBy?: perfilOrderByWithRelationInput | perfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: perfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type perfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: perfilWhereInput
    orderBy?: perfilOrderByWithAggregationInput | perfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: perfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id_perfil: number
    nombre: string
    icono: number | null
    fecha_creacion: Date
    estatus: $Enums.estatus
    id_usuario: number | null
    pin: string | null
    super_usuario: boolean | null
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends perfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type perfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_perfil?: boolean
    nombre?: boolean
    icono?: boolean
    fecha_creacion?: boolean
    estatus?: boolean
    id_usuario?: boolean
    pin?: boolean
    super_usuario?: boolean
    notificacion?: boolean | perfil$notificacionArgs<ExtArgs>
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
    transaccion?: boolean | perfil$transaccionArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type perfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_perfil?: boolean
    nombre?: boolean
    icono?: boolean
    fecha_creacion?: boolean
    estatus?: boolean
    id_usuario?: boolean
    pin?: boolean
    super_usuario?: boolean
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type perfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_perfil?: boolean
    nombre?: boolean
    icono?: boolean
    fecha_creacion?: boolean
    estatus?: boolean
    id_usuario?: boolean
    pin?: boolean
    super_usuario?: boolean
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type perfilSelectScalar = {
    id_perfil?: boolean
    nombre?: boolean
    icono?: boolean
    fecha_creacion?: boolean
    estatus?: boolean
    id_usuario?: boolean
    pin?: boolean
    super_usuario?: boolean
  }

  export type perfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_perfil" | "nombre" | "icono" | "fecha_creacion" | "estatus" | "id_usuario" | "pin" | "super_usuario", ExtArgs["result"]["perfil"]>
  export type perfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacion?: boolean | perfil$notificacionArgs<ExtArgs>
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
    transaccion?: boolean | perfil$transaccionArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type perfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
  }
  export type perfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | perfil$usuarioArgs<ExtArgs>
  }

  export type $perfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "perfil"
    objects: {
      notificacion: Prisma.$notificacionPayload<ExtArgs>[]
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      transaccion: Prisma.$transaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_perfil: number
      nombre: string
      icono: number | null
      fecha_creacion: Date
      estatus: $Enums.estatus
      id_usuario: number | null
      pin: string | null
      super_usuario: boolean | null
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type perfilGetPayload<S extends boolean | null | undefined | perfilDefaultArgs> = $Result.GetResult<Prisma.$perfilPayload, S>

  type perfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<perfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface perfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['perfil'], meta: { name: 'perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {perfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends perfilFindUniqueArgs>(args: SelectSubset<T, perfilFindUniqueArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {perfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends perfilFindUniqueOrThrowArgs>(args: SelectSubset<T, perfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends perfilFindFirstArgs>(args?: SelectSubset<T, perfilFindFirstArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends perfilFindFirstOrThrowArgs>(args?: SelectSubset<T, perfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id_perfil`
     * const perfilWithId_perfilOnly = await prisma.perfil.findMany({ select: { id_perfil: true } })
     * 
     */
    findMany<T extends perfilFindManyArgs>(args?: SelectSubset<T, perfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {perfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends perfilCreateArgs>(args: SelectSubset<T, perfilCreateArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {perfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends perfilCreateManyArgs>(args?: SelectSubset<T, perfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {perfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfils and only return the `id_perfil`
     * const perfilWithId_perfilOnly = await prisma.perfil.createManyAndReturn({
     *   select: { id_perfil: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends perfilCreateManyAndReturnArgs>(args?: SelectSubset<T, perfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perfil.
     * @param {perfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends perfilDeleteArgs>(args: SelectSubset<T, perfilDeleteArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {perfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends perfilUpdateArgs>(args: SelectSubset<T, perfilUpdateArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {perfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends perfilDeleteManyArgs>(args?: SelectSubset<T, perfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends perfilUpdateManyArgs>(args: SelectSubset<T, perfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils and returns the data updated in the database.
     * @param {perfilUpdateManyAndReturnArgs} args - Arguments to update many Perfils.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perfils and only return the `id_perfil`
     * const perfilWithId_perfilOnly = await prisma.perfil.updateManyAndReturn({
     *   select: { id_perfil: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends perfilUpdateManyAndReturnArgs>(args: SelectSubset<T, perfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perfil.
     * @param {perfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends perfilUpsertArgs>(args: SelectSubset<T, perfilUpsertArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends perfilCountArgs>(
      args?: Subset<T, perfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends perfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: perfilGroupByArgs['orderBy'] }
        : { orderBy?: perfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, perfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the perfil model
   */
  readonly fields: perfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__perfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notificacion<T extends perfil$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, perfil$notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends perfil$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, perfil$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaccion<T extends perfil$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, perfil$transaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the perfil model
   */
  interface perfilFieldRefs {
    readonly id_perfil: FieldRef<"perfil", 'Int'>
    readonly nombre: FieldRef<"perfil", 'String'>
    readonly icono: FieldRef<"perfil", 'Int'>
    readonly fecha_creacion: FieldRef<"perfil", 'DateTime'>
    readonly estatus: FieldRef<"perfil", 'estatus'>
    readonly id_usuario: FieldRef<"perfil", 'Int'>
    readonly pin: FieldRef<"perfil", 'String'>
    readonly super_usuario: FieldRef<"perfil", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * perfil findUnique
   */
  export type perfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter, which perfil to fetch.
     */
    where: perfilWhereUniqueInput
  }

  /**
   * perfil findUniqueOrThrow
   */
  export type perfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter, which perfil to fetch.
     */
    where: perfilWhereUniqueInput
  }

  /**
   * perfil findFirst
   */
  export type perfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter, which perfil to fetch.
     */
    where?: perfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfils to fetch.
     */
    orderBy?: perfilOrderByWithRelationInput | perfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfils.
     */
    cursor?: perfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * perfil findFirstOrThrow
   */
  export type perfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter, which perfil to fetch.
     */
    where?: perfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfils to fetch.
     */
    orderBy?: perfilOrderByWithRelationInput | perfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfils.
     */
    cursor?: perfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * perfil findMany
   */
  export type perfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter, which perfils to fetch.
     */
    where?: perfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfils to fetch.
     */
    orderBy?: perfilOrderByWithRelationInput | perfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing perfils.
     */
    cursor?: perfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * perfil create
   */
  export type perfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * The data needed to create a perfil.
     */
    data: XOR<perfilCreateInput, perfilUncheckedCreateInput>
  }

  /**
   * perfil createMany
   */
  export type perfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many perfils.
     */
    data: perfilCreateManyInput | perfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * perfil createManyAndReturn
   */
  export type perfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * The data used to create many perfils.
     */
    data: perfilCreateManyInput | perfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * perfil update
   */
  export type perfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * The data needed to update a perfil.
     */
    data: XOR<perfilUpdateInput, perfilUncheckedUpdateInput>
    /**
     * Choose, which perfil to update.
     */
    where: perfilWhereUniqueInput
  }

  /**
   * perfil updateMany
   */
  export type perfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update perfils.
     */
    data: XOR<perfilUpdateManyMutationInput, perfilUncheckedUpdateManyInput>
    /**
     * Filter which perfils to update
     */
    where?: perfilWhereInput
    /**
     * Limit how many perfils to update.
     */
    limit?: number
  }

  /**
   * perfil updateManyAndReturn
   */
  export type perfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * The data used to update perfils.
     */
    data: XOR<perfilUpdateManyMutationInput, perfilUncheckedUpdateManyInput>
    /**
     * Filter which perfils to update
     */
    where?: perfilWhereInput
    /**
     * Limit how many perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * perfil upsert
   */
  export type perfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * The filter to search for the perfil to update in case it exists.
     */
    where: perfilWhereUniqueInput
    /**
     * In case the perfil found by the `where` argument doesn't exist, create a new perfil with this data.
     */
    create: XOR<perfilCreateInput, perfilUncheckedCreateInput>
    /**
     * In case the perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<perfilUpdateInput, perfilUncheckedUpdateInput>
  }

  /**
   * perfil delete
   */
  export type perfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    /**
     * Filter which perfil to delete.
     */
    where: perfilWhereUniqueInput
  }

  /**
   * perfil deleteMany
   */
  export type perfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfils to delete
     */
    where?: perfilWhereInput
    /**
     * Limit how many perfils to delete.
     */
    limit?: number
  }

  /**
   * perfil.notificacion
   */
  export type perfil$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    cursor?: notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * perfil.usuario
   */
  export type perfil$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * perfil.transaccion
   */
  export type perfil$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    cursor?: transaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * perfil without action
   */
  export type perfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
  }


  /**
   * Model persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    id_persona: number | null
    id_usuario: number | null
  }

  export type PersonaSumAggregateOutputType = {
    id_persona: number | null
    id_usuario: number | null
  }

  export type PersonaMinAggregateOutputType = {
    id_persona: number | null
    nombre: string | null
    tipo: $Enums.tipo_persona | null
    estatus: $Enums.estatus | null
    id_usuario: number | null
  }

  export type PersonaMaxAggregateOutputType = {
    id_persona: number | null
    nombre: string | null
    tipo: $Enums.tipo_persona | null
    estatus: $Enums.estatus | null
    id_usuario: number | null
  }

  export type PersonaCountAggregateOutputType = {
    id_persona: number
    nombre: number
    tipo: number
    estatus: number
    id_usuario: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    id_persona?: true
    id_usuario?: true
  }

  export type PersonaSumAggregateInputType = {
    id_persona?: true
    id_usuario?: true
  }

  export type PersonaMinAggregateInputType = {
    id_persona?: true
    nombre?: true
    tipo?: true
    estatus?: true
    id_usuario?: true
  }

  export type PersonaMaxAggregateInputType = {
    id_persona?: true
    nombre?: true
    tipo?: true
    estatus?: true
    id_usuario?: true
  }

  export type PersonaCountAggregateInputType = {
    id_persona?: true
    nombre?: true
    tipo?: true
    estatus?: true
    id_usuario?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which persona to aggregate.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type personaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personaWhereInput
    orderBy?: personaOrderByWithAggregationInput | personaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: personaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id_persona: number
    nombre: string
    tipo: $Enums.tipo_persona
    estatus: $Enums.estatus
    id_usuario: number | null
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends personaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type personaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_persona?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    id_usuario?: boolean
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
    transaccion?: boolean | persona$transaccionArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type personaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_persona?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    id_usuario?: boolean
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type personaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_persona?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    id_usuario?: boolean
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type personaSelectScalar = {
    id_persona?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    id_usuario?: boolean
  }

  export type personaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_persona" | "nombre" | "tipo" | "estatus" | "id_usuario", ExtArgs["result"]["persona"]>
  export type personaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
    transaccion?: boolean | persona$transaccionArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type personaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
  }
  export type personaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | persona$usuarioArgs<ExtArgs>
  }

  export type $personaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "persona"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      transaccion: Prisma.$transaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_persona: number
      nombre: string
      tipo: $Enums.tipo_persona
      estatus: $Enums.estatus
      id_usuario: number | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type personaGetPayload<S extends boolean | null | undefined | personaDefaultArgs> = $Result.GetResult<Prisma.$personaPayload, S>

  type personaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface personaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['persona'], meta: { name: 'persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {personaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personaFindUniqueArgs>(args: SelectSubset<T, personaFindUniqueArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personaFindUniqueOrThrowArgs>(args: SelectSubset<T, personaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personaFindFirstArgs>(args?: SelectSubset<T, personaFindFirstArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personaFindFirstOrThrowArgs>(args?: SelectSubset<T, personaFindFirstOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id_persona`
     * const personaWithId_personaOnly = await prisma.persona.findMany({ select: { id_persona: true } })
     * 
     */
    findMany<T extends personaFindManyArgs>(args?: SelectSubset<T, personaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {personaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends personaCreateArgs>(args: SelectSubset<T, personaCreateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {personaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personaCreateManyArgs>(args?: SelectSubset<T, personaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {personaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `id_persona`
     * const personaWithId_personaOnly = await prisma.persona.createManyAndReturn({
     *   select: { id_persona: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personaCreateManyAndReturnArgs>(args?: SelectSubset<T, personaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {personaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends personaDeleteArgs>(args: SelectSubset<T, personaDeleteArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {personaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personaUpdateArgs>(args: SelectSubset<T, personaUpdateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {personaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personaDeleteManyArgs>(args?: SelectSubset<T, personaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personaUpdateManyArgs>(args: SelectSubset<T, personaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {personaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `id_persona`
     * const personaWithId_personaOnly = await prisma.persona.updateManyAndReturn({
     *   select: { id_persona: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personaUpdateManyAndReturnArgs>(args: SelectSubset<T, personaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {personaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends personaUpsertArgs>(args: SelectSubset<T, personaUpsertArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends personaCountArgs>(
      args?: Subset<T, personaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personaGroupByArgs['orderBy'] }
        : { orderBy?: personaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the persona model
   */
  readonly fields: personaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends persona$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, persona$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaccion<T extends persona$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, persona$transaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the persona model
   */
  interface personaFieldRefs {
    readonly id_persona: FieldRef<"persona", 'Int'>
    readonly nombre: FieldRef<"persona", 'String'>
    readonly tipo: FieldRef<"persona", 'tipo_persona'>
    readonly estatus: FieldRef<"persona", 'estatus'>
    readonly id_usuario: FieldRef<"persona", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * persona findUnique
   */
  export type personaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findUniqueOrThrow
   */
  export type personaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findFirst
   */
  export type personaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findFirstOrThrow
   */
  export type personaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findMany
   */
  export type personaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which personas to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona create
   */
  export type personaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to create a persona.
     */
    data: XOR<personaCreateInput, personaUncheckedCreateInput>
  }

  /**
   * persona createMany
   */
  export type personaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * persona createManyAndReturn
   */
  export type personaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * persona update
   */
  export type personaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to update a persona.
     */
    data: XOR<personaUpdateInput, personaUncheckedUpdateInput>
    /**
     * Choose, which persona to update.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona updateMany
   */
  export type personaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to update.
     */
    limit?: number
  }

  /**
   * persona updateManyAndReturn
   */
  export type personaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * persona upsert
   */
  export type personaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The filter to search for the persona to update in case it exists.
     */
    where: personaWhereUniqueInput
    /**
     * In case the persona found by the `where` argument doesn't exist, create a new persona with this data.
     */
    create: XOR<personaCreateInput, personaUncheckedCreateInput>
    /**
     * In case the persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personaUpdateInput, personaUncheckedUpdateInput>
  }

  /**
   * persona delete
   */
  export type personaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter which persona to delete.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona deleteMany
   */
  export type personaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personas to delete
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to delete.
     */
    limit?: number
  }

  /**
   * persona.usuario
   */
  export type persona$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * persona.transaccion
   */
  export type persona$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    cursor?: transaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * persona without action
   */
  export type personaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
  }


  /**
   * Model subcategoria
   */

  export type AggregateSubcategoria = {
    _count: SubcategoriaCountAggregateOutputType | null
    _avg: SubcategoriaAvgAggregateOutputType | null
    _sum: SubcategoriaSumAggregateOutputType | null
    _min: SubcategoriaMinAggregateOutputType | null
    _max: SubcategoriaMaxAggregateOutputType | null
  }

  export type SubcategoriaAvgAggregateOutputType = {
    id_subcategoria: number | null
    id_categoria: number | null
    id_usuario: number | null
    icono: number | null
  }

  export type SubcategoriaSumAggregateOutputType = {
    id_subcategoria: number | null
    id_categoria: number | null
    id_usuario: number | null
    icono: number | null
  }

  export type SubcategoriaMinAggregateOutputType = {
    id_subcategoria: number | null
    nombre: string | null
    tipo: $Enums.tipo_movimiento | null
    estatus: $Enums.estatus | null
    flujo: $Enums.flujo_efectivo | null
    id_categoria: number | null
    mostrar_panel: boolean | null
    id_usuario: number | null
    icono: number | null
  }

  export type SubcategoriaMaxAggregateOutputType = {
    id_subcategoria: number | null
    nombre: string | null
    tipo: $Enums.tipo_movimiento | null
    estatus: $Enums.estatus | null
    flujo: $Enums.flujo_efectivo | null
    id_categoria: number | null
    mostrar_panel: boolean | null
    id_usuario: number | null
    icono: number | null
  }

  export type SubcategoriaCountAggregateOutputType = {
    id_subcategoria: number
    nombre: number
    tipo: number
    estatus: number
    flujo: number
    id_categoria: number
    mostrar_panel: number
    id_usuario: number
    icono: number
    _all: number
  }


  export type SubcategoriaAvgAggregateInputType = {
    id_subcategoria?: true
    id_categoria?: true
    id_usuario?: true
    icono?: true
  }

  export type SubcategoriaSumAggregateInputType = {
    id_subcategoria?: true
    id_categoria?: true
    id_usuario?: true
    icono?: true
  }

  export type SubcategoriaMinAggregateInputType = {
    id_subcategoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_categoria?: true
    mostrar_panel?: true
    id_usuario?: true
    icono?: true
  }

  export type SubcategoriaMaxAggregateInputType = {
    id_subcategoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_categoria?: true
    mostrar_panel?: true
    id_usuario?: true
    icono?: true
  }

  export type SubcategoriaCountAggregateInputType = {
    id_subcategoria?: true
    nombre?: true
    tipo?: true
    estatus?: true
    flujo?: true
    id_categoria?: true
    mostrar_panel?: true
    id_usuario?: true
    icono?: true
    _all?: true
  }

  export type SubcategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategoria to aggregate.
     */
    where?: subcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subcategorias
    **/
    _count?: true | SubcategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoriaMaxAggregateInputType
  }

  export type GetSubcategoriaAggregateType<T extends SubcategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategoria[P]>
      : GetScalarType<T[P], AggregateSubcategoria[P]>
  }




  export type subcategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subcategoriaWhereInput
    orderBy?: subcategoriaOrderByWithAggregationInput | subcategoriaOrderByWithAggregationInput[]
    by: SubcategoriaScalarFieldEnum[] | SubcategoriaScalarFieldEnum
    having?: subcategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoriaCountAggregateInputType | true
    _avg?: SubcategoriaAvgAggregateInputType
    _sum?: SubcategoriaSumAggregateInputType
    _min?: SubcategoriaMinAggregateInputType
    _max?: SubcategoriaMaxAggregateInputType
  }

  export type SubcategoriaGroupByOutputType = {
    id_subcategoria: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus: $Enums.estatus
    flujo: $Enums.flujo_efectivo
    id_categoria: number | null
    mostrar_panel: boolean | null
    id_usuario: number | null
    icono: number
    _count: SubcategoriaCountAggregateOutputType | null
    _avg: SubcategoriaAvgAggregateOutputType | null
    _sum: SubcategoriaSumAggregateOutputType | null
    _min: SubcategoriaMinAggregateOutputType | null
    _max: SubcategoriaMaxAggregateOutputType | null
  }

  type GetSubcategoriaGroupByPayload<T extends subcategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoriaGroupByOutputType[P]>
        }
      >
    >


  export type subcategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_subcategoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_categoria?: boolean
    mostrar_panel?: boolean
    id_usuario?: boolean
    icono?: boolean
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
    transaccion?: boolean | subcategoria$transaccionArgs<ExtArgs>
    _count?: boolean | SubcategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategoria"]>

  export type subcategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_subcategoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_categoria?: boolean
    mostrar_panel?: boolean
    id_usuario?: boolean
    icono?: boolean
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["subcategoria"]>

  export type subcategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_subcategoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_categoria?: boolean
    mostrar_panel?: boolean
    id_usuario?: boolean
    icono?: boolean
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["subcategoria"]>

  export type subcategoriaSelectScalar = {
    id_subcategoria?: boolean
    nombre?: boolean
    tipo?: boolean
    estatus?: boolean
    flujo?: boolean
    id_categoria?: boolean
    mostrar_panel?: boolean
    id_usuario?: boolean
    icono?: boolean
  }

  export type subcategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_subcategoria" | "nombre" | "tipo" | "estatus" | "flujo" | "id_categoria" | "mostrar_panel" | "id_usuario" | "icono", ExtArgs["result"]["subcategoria"]>
  export type subcategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
    transaccion?: boolean | subcategoria$transaccionArgs<ExtArgs>
    _count?: boolean | SubcategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subcategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
  }
  export type subcategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | subcategoria$categoriaArgs<ExtArgs>
    usuario?: boolean | subcategoria$usuarioArgs<ExtArgs>
  }

  export type $subcategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subcategoria"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      transaccion: Prisma.$transaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_subcategoria: number
      nombre: string
      tipo: $Enums.tipo_movimiento
      estatus: $Enums.estatus
      flujo: $Enums.flujo_efectivo
      id_categoria: number | null
      mostrar_panel: boolean | null
      id_usuario: number | null
      icono: number
    }, ExtArgs["result"]["subcategoria"]>
    composites: {}
  }

  type subcategoriaGetPayload<S extends boolean | null | undefined | subcategoriaDefaultArgs> = $Result.GetResult<Prisma.$subcategoriaPayload, S>

  type subcategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subcategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoriaCountAggregateInputType | true
    }

  export interface subcategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcategoria'], meta: { name: 'subcategoria' } }
    /**
     * Find zero or one Subcategoria that matches the filter.
     * @param {subcategoriaFindUniqueArgs} args - Arguments to find a Subcategoria
     * @example
     * // Get one Subcategoria
     * const subcategoria = await prisma.subcategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subcategoriaFindUniqueArgs>(args: SelectSubset<T, subcategoriaFindUniqueArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subcategoriaFindUniqueOrThrowArgs} args - Arguments to find a Subcategoria
     * @example
     * // Get one Subcategoria
     * const subcategoria = await prisma.subcategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subcategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, subcategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaFindFirstArgs} args - Arguments to find a Subcategoria
     * @example
     * // Get one Subcategoria
     * const subcategoria = await prisma.subcategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subcategoriaFindFirstArgs>(args?: SelectSubset<T, subcategoriaFindFirstArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaFindFirstOrThrowArgs} args - Arguments to find a Subcategoria
     * @example
     * // Get one Subcategoria
     * const subcategoria = await prisma.subcategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subcategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, subcategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategorias
     * const subcategorias = await prisma.subcategoria.findMany()
     * 
     * // Get first 10 Subcategorias
     * const subcategorias = await prisma.subcategoria.findMany({ take: 10 })
     * 
     * // Only select the `id_subcategoria`
     * const subcategoriaWithId_subcategoriaOnly = await prisma.subcategoria.findMany({ select: { id_subcategoria: true } })
     * 
     */
    findMany<T extends subcategoriaFindManyArgs>(args?: SelectSubset<T, subcategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategoria.
     * @param {subcategoriaCreateArgs} args - Arguments to create a Subcategoria.
     * @example
     * // Create one Subcategoria
     * const Subcategoria = await prisma.subcategoria.create({
     *   data: {
     *     // ... data to create a Subcategoria
     *   }
     * })
     * 
     */
    create<T extends subcategoriaCreateArgs>(args: SelectSubset<T, subcategoriaCreateArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategorias.
     * @param {subcategoriaCreateManyArgs} args - Arguments to create many Subcategorias.
     * @example
     * // Create many Subcategorias
     * const subcategoria = await prisma.subcategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subcategoriaCreateManyArgs>(args?: SelectSubset<T, subcategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategorias and returns the data saved in the database.
     * @param {subcategoriaCreateManyAndReturnArgs} args - Arguments to create many Subcategorias.
     * @example
     * // Create many Subcategorias
     * const subcategoria = await prisma.subcategoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategorias and only return the `id_subcategoria`
     * const subcategoriaWithId_subcategoriaOnly = await prisma.subcategoria.createManyAndReturn({
     *   select: { id_subcategoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subcategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, subcategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategoria.
     * @param {subcategoriaDeleteArgs} args - Arguments to delete one Subcategoria.
     * @example
     * // Delete one Subcategoria
     * const Subcategoria = await prisma.subcategoria.delete({
     *   where: {
     *     // ... filter to delete one Subcategoria
     *   }
     * })
     * 
     */
    delete<T extends subcategoriaDeleteArgs>(args: SelectSubset<T, subcategoriaDeleteArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategoria.
     * @param {subcategoriaUpdateArgs} args - Arguments to update one Subcategoria.
     * @example
     * // Update one Subcategoria
     * const subcategoria = await prisma.subcategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subcategoriaUpdateArgs>(args: SelectSubset<T, subcategoriaUpdateArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategorias.
     * @param {subcategoriaDeleteManyArgs} args - Arguments to filter Subcategorias to delete.
     * @example
     * // Delete a few Subcategorias
     * const { count } = await prisma.subcategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subcategoriaDeleteManyArgs>(args?: SelectSubset<T, subcategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategorias
     * const subcategoria = await prisma.subcategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subcategoriaUpdateManyArgs>(args: SelectSubset<T, subcategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategorias and returns the data updated in the database.
     * @param {subcategoriaUpdateManyAndReturnArgs} args - Arguments to update many Subcategorias.
     * @example
     * // Update many Subcategorias
     * const subcategoria = await prisma.subcategoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategorias and only return the `id_subcategoria`
     * const subcategoriaWithId_subcategoriaOnly = await prisma.subcategoria.updateManyAndReturn({
     *   select: { id_subcategoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subcategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, subcategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategoria.
     * @param {subcategoriaUpsertArgs} args - Arguments to update or create a Subcategoria.
     * @example
     * // Update or create a Subcategoria
     * const subcategoria = await prisma.subcategoria.upsert({
     *   create: {
     *     // ... data to create a Subcategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategoria we want to update
     *   }
     * })
     */
    upsert<T extends subcategoriaUpsertArgs>(args: SelectSubset<T, subcategoriaUpsertArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaCountArgs} args - Arguments to filter Subcategorias to count.
     * @example
     * // Count the number of Subcategorias
     * const count = await prisma.subcategoria.count({
     *   where: {
     *     // ... the filter for the Subcategorias we want to count
     *   }
     * })
    **/
    count<T extends subcategoriaCountArgs>(
      args?: Subset<T, subcategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubcategoriaAggregateArgs>(args: Subset<T, SubcategoriaAggregateArgs>): Prisma.PrismaPromise<GetSubcategoriaAggregateType<T>>

    /**
     * Group by Subcategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subcategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subcategoriaGroupByArgs['orderBy'] }
        : { orderBy?: subcategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subcategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcategoria model
   */
  readonly fields: subcategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subcategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends subcategoria$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, subcategoria$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends subcategoria$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, subcategoria$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaccion<T extends subcategoria$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, subcategoria$transaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subcategoria model
   */
  interface subcategoriaFieldRefs {
    readonly id_subcategoria: FieldRef<"subcategoria", 'Int'>
    readonly nombre: FieldRef<"subcategoria", 'String'>
    readonly tipo: FieldRef<"subcategoria", 'tipo_movimiento'>
    readonly estatus: FieldRef<"subcategoria", 'estatus'>
    readonly flujo: FieldRef<"subcategoria", 'flujo_efectivo'>
    readonly id_categoria: FieldRef<"subcategoria", 'Int'>
    readonly mostrar_panel: FieldRef<"subcategoria", 'Boolean'>
    readonly id_usuario: FieldRef<"subcategoria", 'Int'>
    readonly icono: FieldRef<"subcategoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subcategoria findUnique
   */
  export type subcategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter, which subcategoria to fetch.
     */
    where: subcategoriaWhereUniqueInput
  }

  /**
   * subcategoria findUniqueOrThrow
   */
  export type subcategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter, which subcategoria to fetch.
     */
    where: subcategoriaWhereUniqueInput
  }

  /**
   * subcategoria findFirst
   */
  export type subcategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter, which subcategoria to fetch.
     */
    where?: subcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategorias.
     */
    cursor?: subcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategorias.
     */
    distinct?: SubcategoriaScalarFieldEnum | SubcategoriaScalarFieldEnum[]
  }

  /**
   * subcategoria findFirstOrThrow
   */
  export type subcategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter, which subcategoria to fetch.
     */
    where?: subcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcategorias.
     */
    cursor?: subcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcategorias.
     */
    distinct?: SubcategoriaScalarFieldEnum | SubcategoriaScalarFieldEnum[]
  }

  /**
   * subcategoria findMany
   */
  export type subcategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter, which subcategorias to fetch.
     */
    where?: subcategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcategorias to fetch.
     */
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subcategorias.
     */
    cursor?: subcategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcategorias.
     */
    skip?: number
    distinct?: SubcategoriaScalarFieldEnum | SubcategoriaScalarFieldEnum[]
  }

  /**
   * subcategoria create
   */
  export type subcategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a subcategoria.
     */
    data: XOR<subcategoriaCreateInput, subcategoriaUncheckedCreateInput>
  }

  /**
   * subcategoria createMany
   */
  export type subcategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subcategorias.
     */
    data: subcategoriaCreateManyInput | subcategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subcategoria createManyAndReturn
   */
  export type subcategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many subcategorias.
     */
    data: subcategoriaCreateManyInput | subcategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategoria update
   */
  export type subcategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a subcategoria.
     */
    data: XOR<subcategoriaUpdateInput, subcategoriaUncheckedUpdateInput>
    /**
     * Choose, which subcategoria to update.
     */
    where: subcategoriaWhereUniqueInput
  }

  /**
   * subcategoria updateMany
   */
  export type subcategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subcategorias.
     */
    data: XOR<subcategoriaUpdateManyMutationInput, subcategoriaUncheckedUpdateManyInput>
    /**
     * Filter which subcategorias to update
     */
    where?: subcategoriaWhereInput
    /**
     * Limit how many subcategorias to update.
     */
    limit?: number
  }

  /**
   * subcategoria updateManyAndReturn
   */
  export type subcategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * The data used to update subcategorias.
     */
    data: XOR<subcategoriaUpdateManyMutationInput, subcategoriaUncheckedUpdateManyInput>
    /**
     * Filter which subcategorias to update
     */
    where?: subcategoriaWhereInput
    /**
     * Limit how many subcategorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subcategoria upsert
   */
  export type subcategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the subcategoria to update in case it exists.
     */
    where: subcategoriaWhereUniqueInput
    /**
     * In case the subcategoria found by the `where` argument doesn't exist, create a new subcategoria with this data.
     */
    create: XOR<subcategoriaCreateInput, subcategoriaUncheckedCreateInput>
    /**
     * In case the subcategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subcategoriaUpdateInput, subcategoriaUncheckedUpdateInput>
  }

  /**
   * subcategoria delete
   */
  export type subcategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    /**
     * Filter which subcategoria to delete.
     */
    where: subcategoriaWhereUniqueInput
  }

  /**
   * subcategoria deleteMany
   */
  export type subcategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcategorias to delete
     */
    where?: subcategoriaWhereInput
    /**
     * Limit how many subcategorias to delete.
     */
    limit?: number
  }

  /**
   * subcategoria.categoria
   */
  export type subcategoria$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * subcategoria.usuario
   */
  export type subcategoria$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * subcategoria.transaccion
   */
  export type subcategoria$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    cursor?: transaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * subcategoria without action
   */
  export type subcategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
  }


  /**
   * Model transaccion
   */

  export type AggregateTransaccion = {
    _count: TransaccionCountAggregateOutputType | null
    _avg: TransaccionAvgAggregateOutputType | null
    _sum: TransaccionSumAggregateOutputType | null
    _min: TransaccionMinAggregateOutputType | null
    _max: TransaccionMaxAggregateOutputType | null
  }

  export type TransaccionAvgAggregateOutputType = {
    id_transaccion: number | null
    monto_total: Decimal | null
    plazos: number | null
    id_categoria: number | null
    id_usuario: number | null
    id_perfil: number | null
    id_subcategoria: number | null
    id_persona: number | null
  }

  export type TransaccionSumAggregateOutputType = {
    id_transaccion: number | null
    monto_total: Decimal | null
    plazos: number | null
    id_categoria: number | null
    id_usuario: number | null
    id_perfil: number | null
    id_subcategoria: number | null
    id_persona: number | null
  }

  export type TransaccionMinAggregateOutputType = {
    id_transaccion: number | null
    tipo: $Enums.tipo_movimiento | null
    fecha_transaccion: Date | null
    nota: string | null
    monto_total: Decimal | null
    plazos: number | null
    estatus: $Enums.estatus_transaccion | null
    id_categoria: number | null
    id_usuario: number | null
    id_perfil: number | null
    id_subcategoria: number | null
    id_persona: number | null
  }

  export type TransaccionMaxAggregateOutputType = {
    id_transaccion: number | null
    tipo: $Enums.tipo_movimiento | null
    fecha_transaccion: Date | null
    nota: string | null
    monto_total: Decimal | null
    plazos: number | null
    estatus: $Enums.estatus_transaccion | null
    id_categoria: number | null
    id_usuario: number | null
    id_perfil: number | null
    id_subcategoria: number | null
    id_persona: number | null
  }

  export type TransaccionCountAggregateOutputType = {
    id_transaccion: number
    tipo: number
    fecha_transaccion: number
    nota: number
    monto_total: number
    plazos: number
    estatus: number
    id_categoria: number
    id_usuario: number
    id_perfil: number
    id_subcategoria: number
    id_persona: number
    _all: number
  }


  export type TransaccionAvgAggregateInputType = {
    id_transaccion?: true
    monto_total?: true
    plazos?: true
    id_categoria?: true
    id_usuario?: true
    id_perfil?: true
    id_subcategoria?: true
    id_persona?: true
  }

  export type TransaccionSumAggregateInputType = {
    id_transaccion?: true
    monto_total?: true
    plazos?: true
    id_categoria?: true
    id_usuario?: true
    id_perfil?: true
    id_subcategoria?: true
    id_persona?: true
  }

  export type TransaccionMinAggregateInputType = {
    id_transaccion?: true
    tipo?: true
    fecha_transaccion?: true
    nota?: true
    monto_total?: true
    plazos?: true
    estatus?: true
    id_categoria?: true
    id_usuario?: true
    id_perfil?: true
    id_subcategoria?: true
    id_persona?: true
  }

  export type TransaccionMaxAggregateInputType = {
    id_transaccion?: true
    tipo?: true
    fecha_transaccion?: true
    nota?: true
    monto_total?: true
    plazos?: true
    estatus?: true
    id_categoria?: true
    id_usuario?: true
    id_perfil?: true
    id_subcategoria?: true
    id_persona?: true
  }

  export type TransaccionCountAggregateInputType = {
    id_transaccion?: true
    tipo?: true
    fecha_transaccion?: true
    nota?: true
    monto_total?: true
    plazos?: true
    estatus?: true
    id_categoria?: true
    id_usuario?: true
    id_perfil?: true
    id_subcategoria?: true
    id_persona?: true
    _all?: true
  }

  export type TransaccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccion to aggregate.
     */
    where?: transaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccions to fetch.
     */
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaccions
    **/
    _count?: true | TransaccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaccionMaxAggregateInputType
  }

  export type GetTransaccionAggregateType<T extends TransaccionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccion[P]>
      : GetScalarType<T[P], AggregateTransaccion[P]>
  }




  export type transaccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithAggregationInput | transaccionOrderByWithAggregationInput[]
    by: TransaccionScalarFieldEnum[] | TransaccionScalarFieldEnum
    having?: transaccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaccionCountAggregateInputType | true
    _avg?: TransaccionAvgAggregateInputType
    _sum?: TransaccionSumAggregateInputType
    _min?: TransaccionMinAggregateInputType
    _max?: TransaccionMaxAggregateInputType
  }

  export type TransaccionGroupByOutputType = {
    id_transaccion: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion: Date
    nota: string | null
    monto_total: Decimal
    plazos: number | null
    estatus: $Enums.estatus_transaccion
    id_categoria: number | null
    id_usuario: number | null
    id_perfil: number | null
    id_subcategoria: number | null
    id_persona: number | null
    _count: TransaccionCountAggregateOutputType | null
    _avg: TransaccionAvgAggregateOutputType | null
    _sum: TransaccionSumAggregateOutputType | null
    _min: TransaccionMinAggregateOutputType | null
    _max: TransaccionMaxAggregateOutputType | null
  }

  type GetTransaccionGroupByPayload<T extends transaccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaccionGroupByOutputType[P]>
            : GetScalarType<T[P], TransaccionGroupByOutputType[P]>
        }
      >
    >


  export type transaccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaccion?: boolean
    tipo?: boolean
    fecha_transaccion?: boolean
    nota?: boolean
    monto_total?: boolean
    plazos?: boolean
    estatus?: boolean
    id_categoria?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    id_subcategoria?: boolean
    id_persona?: boolean
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
    transaccion_cuota?: boolean | transaccion$transaccion_cuotaArgs<ExtArgs>
    _count?: boolean | TransaccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion"]>

  export type transaccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaccion?: boolean
    tipo?: boolean
    fecha_transaccion?: boolean
    nota?: boolean
    monto_total?: boolean
    plazos?: boolean
    estatus?: boolean
    id_categoria?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    id_subcategoria?: boolean
    id_persona?: boolean
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion"]>

  export type transaccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaccion?: boolean
    tipo?: boolean
    fecha_transaccion?: boolean
    nota?: boolean
    monto_total?: boolean
    plazos?: boolean
    estatus?: boolean
    id_categoria?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    id_subcategoria?: boolean
    id_persona?: boolean
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion"]>

  export type transaccionSelectScalar = {
    id_transaccion?: boolean
    tipo?: boolean
    fecha_transaccion?: boolean
    nota?: boolean
    monto_total?: boolean
    plazos?: boolean
    estatus?: boolean
    id_categoria?: boolean
    id_usuario?: boolean
    id_perfil?: boolean
    id_subcategoria?: boolean
    id_persona?: boolean
  }

  export type transaccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transaccion" | "tipo" | "fecha_transaccion" | "nota" | "monto_total" | "plazos" | "estatus" | "id_categoria" | "id_usuario" | "id_perfil" | "id_subcategoria" | "id_persona", ExtArgs["result"]["transaccion"]>
  export type transaccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
    transaccion_cuota?: boolean | transaccion$transaccion_cuotaArgs<ExtArgs>
    _count?: boolean | TransaccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
  }
  export type transaccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | transaccion$categoriaArgs<ExtArgs>
    perfil?: boolean | transaccion$perfilArgs<ExtArgs>
    persona?: boolean | transaccion$personaArgs<ExtArgs>
    subcategoria?: boolean | transaccion$subcategoriaArgs<ExtArgs>
    usuario?: boolean | transaccion$usuarioArgs<ExtArgs>
  }

  export type $transaccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaccion"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs> | null
      perfil: Prisma.$perfilPayload<ExtArgs> | null
      persona: Prisma.$personaPayload<ExtArgs> | null
      subcategoria: Prisma.$subcategoriaPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs> | null
      transaccion_cuota: Prisma.$transaccion_cuotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transaccion: number
      tipo: $Enums.tipo_movimiento
      fecha_transaccion: Date
      nota: string | null
      monto_total: Prisma.Decimal
      plazos: number | null
      estatus: $Enums.estatus_transaccion
      id_categoria: number | null
      id_usuario: number | null
      id_perfil: number | null
      id_subcategoria: number | null
      id_persona: number | null
    }, ExtArgs["result"]["transaccion"]>
    composites: {}
  }

  type transaccionGetPayload<S extends boolean | null | undefined | transaccionDefaultArgs> = $Result.GetResult<Prisma.$transaccionPayload, S>

  type transaccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaccionCountAggregateInputType | true
    }

  export interface transaccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaccion'], meta: { name: 'transaccion' } }
    /**
     * Find zero or one Transaccion that matches the filter.
     * @param {transaccionFindUniqueArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaccionFindUniqueArgs>(args: SelectSubset<T, transaccionFindUniqueArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaccionFindUniqueOrThrowArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaccionFindUniqueOrThrowArgs>(args: SelectSubset<T, transaccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionFindFirstArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaccionFindFirstArgs>(args?: SelectSubset<T, transaccionFindFirstArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionFindFirstOrThrowArgs} args - Arguments to find a Transaccion
     * @example
     * // Get one Transaccion
     * const transaccion = await prisma.transaccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaccionFindFirstOrThrowArgs>(args?: SelectSubset<T, transaccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaccions
     * const transaccions = await prisma.transaccion.findMany()
     * 
     * // Get first 10 Transaccions
     * const transaccions = await prisma.transaccion.findMany({ take: 10 })
     * 
     * // Only select the `id_transaccion`
     * const transaccionWithId_transaccionOnly = await prisma.transaccion.findMany({ select: { id_transaccion: true } })
     * 
     */
    findMany<T extends transaccionFindManyArgs>(args?: SelectSubset<T, transaccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaccion.
     * @param {transaccionCreateArgs} args - Arguments to create a Transaccion.
     * @example
     * // Create one Transaccion
     * const Transaccion = await prisma.transaccion.create({
     *   data: {
     *     // ... data to create a Transaccion
     *   }
     * })
     * 
     */
    create<T extends transaccionCreateArgs>(args: SelectSubset<T, transaccionCreateArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaccions.
     * @param {transaccionCreateManyArgs} args - Arguments to create many Transaccions.
     * @example
     * // Create many Transaccions
     * const transaccion = await prisma.transaccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaccionCreateManyArgs>(args?: SelectSubset<T, transaccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaccions and returns the data saved in the database.
     * @param {transaccionCreateManyAndReturnArgs} args - Arguments to create many Transaccions.
     * @example
     * // Create many Transaccions
     * const transaccion = await prisma.transaccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaccions and only return the `id_transaccion`
     * const transaccionWithId_transaccionOnly = await prisma.transaccion.createManyAndReturn({
     *   select: { id_transaccion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaccionCreateManyAndReturnArgs>(args?: SelectSubset<T, transaccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaccion.
     * @param {transaccionDeleteArgs} args - Arguments to delete one Transaccion.
     * @example
     * // Delete one Transaccion
     * const Transaccion = await prisma.transaccion.delete({
     *   where: {
     *     // ... filter to delete one Transaccion
     *   }
     * })
     * 
     */
    delete<T extends transaccionDeleteArgs>(args: SelectSubset<T, transaccionDeleteArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaccion.
     * @param {transaccionUpdateArgs} args - Arguments to update one Transaccion.
     * @example
     * // Update one Transaccion
     * const transaccion = await prisma.transaccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaccionUpdateArgs>(args: SelectSubset<T, transaccionUpdateArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaccions.
     * @param {transaccionDeleteManyArgs} args - Arguments to filter Transaccions to delete.
     * @example
     * // Delete a few Transaccions
     * const { count } = await prisma.transaccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaccionDeleteManyArgs>(args?: SelectSubset<T, transaccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaccions
     * const transaccion = await prisma.transaccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaccionUpdateManyArgs>(args: SelectSubset<T, transaccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaccions and returns the data updated in the database.
     * @param {transaccionUpdateManyAndReturnArgs} args - Arguments to update many Transaccions.
     * @example
     * // Update many Transaccions
     * const transaccion = await prisma.transaccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaccions and only return the `id_transaccion`
     * const transaccionWithId_transaccionOnly = await prisma.transaccion.updateManyAndReturn({
     *   select: { id_transaccion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaccionUpdateManyAndReturnArgs>(args: SelectSubset<T, transaccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaccion.
     * @param {transaccionUpsertArgs} args - Arguments to update or create a Transaccion.
     * @example
     * // Update or create a Transaccion
     * const transaccion = await prisma.transaccion.upsert({
     *   create: {
     *     // ... data to create a Transaccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaccion we want to update
     *   }
     * })
     */
    upsert<T extends transaccionUpsertArgs>(args: SelectSubset<T, transaccionUpsertArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionCountArgs} args - Arguments to filter Transaccions to count.
     * @example
     * // Count the number of Transaccions
     * const count = await prisma.transaccion.count({
     *   where: {
     *     // ... the filter for the Transaccions we want to count
     *   }
     * })
    **/
    count<T extends transaccionCountArgs>(
      args?: Subset<T, transaccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaccionAggregateArgs>(args: Subset<T, TransaccionAggregateArgs>): Prisma.PrismaPromise<GetTransaccionAggregateType<T>>

    /**
     * Group by Transaccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaccionGroupByArgs['orderBy'] }
        : { orderBy?: transaccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaccion model
   */
  readonly fields: transaccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends transaccion$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$categoriaArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    perfil<T extends transaccion$perfilArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$perfilArgs<ExtArgs>>): Prisma__perfilClient<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    persona<T extends transaccion$personaArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$personaArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategoria<T extends transaccion$subcategoriaArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$subcategoriaArgs<ExtArgs>>): Prisma__subcategoriaClient<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends transaccion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaccion_cuota<T extends transaccion$transaccion_cuotaArgs<ExtArgs> = {}>(args?: Subset<T, transaccion$transaccion_cuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaccion model
   */
  interface transaccionFieldRefs {
    readonly id_transaccion: FieldRef<"transaccion", 'Int'>
    readonly tipo: FieldRef<"transaccion", 'tipo_movimiento'>
    readonly fecha_transaccion: FieldRef<"transaccion", 'DateTime'>
    readonly nota: FieldRef<"transaccion", 'String'>
    readonly monto_total: FieldRef<"transaccion", 'Decimal'>
    readonly plazos: FieldRef<"transaccion", 'Int'>
    readonly estatus: FieldRef<"transaccion", 'estatus_transaccion'>
    readonly id_categoria: FieldRef<"transaccion", 'Int'>
    readonly id_usuario: FieldRef<"transaccion", 'Int'>
    readonly id_perfil: FieldRef<"transaccion", 'Int'>
    readonly id_subcategoria: FieldRef<"transaccion", 'Int'>
    readonly id_persona: FieldRef<"transaccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transaccion findUnique
   */
  export type transaccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter, which transaccion to fetch.
     */
    where: transaccionWhereUniqueInput
  }

  /**
   * transaccion findUniqueOrThrow
   */
  export type transaccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter, which transaccion to fetch.
     */
    where: transaccionWhereUniqueInput
  }

  /**
   * transaccion findFirst
   */
  export type transaccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter, which transaccion to fetch.
     */
    where?: transaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccions to fetch.
     */
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccions.
     */
    cursor?: transaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccions.
     */
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * transaccion findFirstOrThrow
   */
  export type transaccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter, which transaccion to fetch.
     */
    where?: transaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccions to fetch.
     */
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccions.
     */
    cursor?: transaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccions.
     */
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * transaccion findMany
   */
  export type transaccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter, which transaccions to fetch.
     */
    where?: transaccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccions to fetch.
     */
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaccions.
     */
    cursor?: transaccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccions.
     */
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * transaccion create
   */
  export type transaccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaccion.
     */
    data: XOR<transaccionCreateInput, transaccionUncheckedCreateInput>
  }

  /**
   * transaccion createMany
   */
  export type transaccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaccions.
     */
    data: transaccionCreateManyInput | transaccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaccion createManyAndReturn
   */
  export type transaccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * The data used to create many transaccions.
     */
    data: transaccionCreateManyInput | transaccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccion update
   */
  export type transaccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaccion.
     */
    data: XOR<transaccionUpdateInput, transaccionUncheckedUpdateInput>
    /**
     * Choose, which transaccion to update.
     */
    where: transaccionWhereUniqueInput
  }

  /**
   * transaccion updateMany
   */
  export type transaccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaccions.
     */
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyInput>
    /**
     * Filter which transaccions to update
     */
    where?: transaccionWhereInput
    /**
     * Limit how many transaccions to update.
     */
    limit?: number
  }

  /**
   * transaccion updateManyAndReturn
   */
  export type transaccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * The data used to update transaccions.
     */
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyInput>
    /**
     * Filter which transaccions to update
     */
    where?: transaccionWhereInput
    /**
     * Limit how many transaccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccion upsert
   */
  export type transaccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaccion to update in case it exists.
     */
    where: transaccionWhereUniqueInput
    /**
     * In case the transaccion found by the `where` argument doesn't exist, create a new transaccion with this data.
     */
    create: XOR<transaccionCreateInput, transaccionUncheckedCreateInput>
    /**
     * In case the transaccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaccionUpdateInput, transaccionUncheckedUpdateInput>
  }

  /**
   * transaccion delete
   */
  export type transaccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    /**
     * Filter which transaccion to delete.
     */
    where: transaccionWhereUniqueInput
  }

  /**
   * transaccion deleteMany
   */
  export type transaccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccions to delete
     */
    where?: transaccionWhereInput
    /**
     * Limit how many transaccions to delete.
     */
    limit?: number
  }

  /**
   * transaccion.categoria
   */
  export type transaccion$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
  }

  /**
   * transaccion.perfil
   */
  export type transaccion$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    where?: perfilWhereInput
  }

  /**
   * transaccion.persona
   */
  export type transaccion$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    where?: personaWhereInput
  }

  /**
   * transaccion.subcategoria
   */
  export type transaccion$subcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    where?: subcategoriaWhereInput
  }

  /**
   * transaccion.usuario
   */
  export type transaccion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
  }

  /**
   * transaccion.transaccion_cuota
   */
  export type transaccion$transaccion_cuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    where?: transaccion_cuotaWhereInput
    orderBy?: transaccion_cuotaOrderByWithRelationInput | transaccion_cuotaOrderByWithRelationInput[]
    cursor?: transaccion_cuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaccion_cuotaScalarFieldEnum | Transaccion_cuotaScalarFieldEnum[]
  }

  /**
   * transaccion without action
   */
  export type transaccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
  }


  /**
   * Model transaccion_cuota
   */

  export type AggregateTransaccion_cuota = {
    _count: Transaccion_cuotaCountAggregateOutputType | null
    _avg: Transaccion_cuotaAvgAggregateOutputType | null
    _sum: Transaccion_cuotaSumAggregateOutputType | null
    _min: Transaccion_cuotaMinAggregateOutputType | null
    _max: Transaccion_cuotaMaxAggregateOutputType | null
  }

  export type Transaccion_cuotaAvgAggregateOutputType = {
    id_cuota: number | null
    id_transaccion: number | null
    monto: Decimal | null
    pagado: Decimal | null
  }

  export type Transaccion_cuotaSumAggregateOutputType = {
    id_cuota: number | null
    id_transaccion: number | null
    monto: Decimal | null
    pagado: Decimal | null
  }

  export type Transaccion_cuotaMinAggregateOutputType = {
    id_cuota: number | null
    id_transaccion: number | null
    monto: Decimal | null
    fecha_vencimiento: Date | null
    fecha_pago: Date | null
    estatus: $Enums.estatus_transaccion | null
    pagado: Decimal | null
  }

  export type Transaccion_cuotaMaxAggregateOutputType = {
    id_cuota: number | null
    id_transaccion: number | null
    monto: Decimal | null
    fecha_vencimiento: Date | null
    fecha_pago: Date | null
    estatus: $Enums.estatus_transaccion | null
    pagado: Decimal | null
  }

  export type Transaccion_cuotaCountAggregateOutputType = {
    id_cuota: number
    id_transaccion: number
    monto: number
    fecha_vencimiento: number
    fecha_pago: number
    estatus: number
    pagado: number
    _all: number
  }


  export type Transaccion_cuotaAvgAggregateInputType = {
    id_cuota?: true
    id_transaccion?: true
    monto?: true
    pagado?: true
  }

  export type Transaccion_cuotaSumAggregateInputType = {
    id_cuota?: true
    id_transaccion?: true
    monto?: true
    pagado?: true
  }

  export type Transaccion_cuotaMinAggregateInputType = {
    id_cuota?: true
    id_transaccion?: true
    monto?: true
    fecha_vencimiento?: true
    fecha_pago?: true
    estatus?: true
    pagado?: true
  }

  export type Transaccion_cuotaMaxAggregateInputType = {
    id_cuota?: true
    id_transaccion?: true
    monto?: true
    fecha_vencimiento?: true
    fecha_pago?: true
    estatus?: true
    pagado?: true
  }

  export type Transaccion_cuotaCountAggregateInputType = {
    id_cuota?: true
    id_transaccion?: true
    monto?: true
    fecha_vencimiento?: true
    fecha_pago?: true
    estatus?: true
    pagado?: true
    _all?: true
  }

  export type Transaccion_cuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccion_cuota to aggregate.
     */
    where?: transaccion_cuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccion_cuotas to fetch.
     */
    orderBy?: transaccion_cuotaOrderByWithRelationInput | transaccion_cuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaccion_cuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccion_cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccion_cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaccion_cuotas
    **/
    _count?: true | Transaccion_cuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaccion_cuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaccion_cuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaccion_cuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaccion_cuotaMaxAggregateInputType
  }

  export type GetTransaccion_cuotaAggregateType<T extends Transaccion_cuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaccion_cuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaccion_cuota[P]>
      : GetScalarType<T[P], AggregateTransaccion_cuota[P]>
  }




  export type transaccion_cuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaccion_cuotaWhereInput
    orderBy?: transaccion_cuotaOrderByWithAggregationInput | transaccion_cuotaOrderByWithAggregationInput[]
    by: Transaccion_cuotaScalarFieldEnum[] | Transaccion_cuotaScalarFieldEnum
    having?: transaccion_cuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaccion_cuotaCountAggregateInputType | true
    _avg?: Transaccion_cuotaAvgAggregateInputType
    _sum?: Transaccion_cuotaSumAggregateInputType
    _min?: Transaccion_cuotaMinAggregateInputType
    _max?: Transaccion_cuotaMaxAggregateInputType
  }

  export type Transaccion_cuotaGroupByOutputType = {
    id_cuota: number
    id_transaccion: number | null
    monto: Decimal
    fecha_vencimiento: Date | null
    fecha_pago: Date | null
    estatus: $Enums.estatus_transaccion
    pagado: Decimal
    _count: Transaccion_cuotaCountAggregateOutputType | null
    _avg: Transaccion_cuotaAvgAggregateOutputType | null
    _sum: Transaccion_cuotaSumAggregateOutputType | null
    _min: Transaccion_cuotaMinAggregateOutputType | null
    _max: Transaccion_cuotaMaxAggregateOutputType | null
  }

  type GetTransaccion_cuotaGroupByPayload<T extends transaccion_cuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaccion_cuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaccion_cuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaccion_cuotaGroupByOutputType[P]>
            : GetScalarType<T[P], Transaccion_cuotaGroupByOutputType[P]>
        }
      >
    >


  export type transaccion_cuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_transaccion?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    fecha_pago?: boolean
    estatus?: boolean
    pagado?: boolean
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion_cuota"]>

  export type transaccion_cuotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_transaccion?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    fecha_pago?: boolean
    estatus?: boolean
    pagado?: boolean
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion_cuota"]>

  export type transaccion_cuotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_transaccion?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    fecha_pago?: boolean
    estatus?: boolean
    pagado?: boolean
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }, ExtArgs["result"]["transaccion_cuota"]>

  export type transaccion_cuotaSelectScalar = {
    id_cuota?: boolean
    id_transaccion?: boolean
    monto?: boolean
    fecha_vencimiento?: boolean
    fecha_pago?: boolean
    estatus?: boolean
    pagado?: boolean
  }

  export type transaccion_cuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cuota" | "id_transaccion" | "monto" | "fecha_vencimiento" | "fecha_pago" | "estatus" | "pagado", ExtArgs["result"]["transaccion_cuota"]>
  export type transaccion_cuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }
  export type transaccion_cuotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }
  export type transaccion_cuotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaccion?: boolean | transaccion_cuota$transaccionArgs<ExtArgs>
  }

  export type $transaccion_cuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaccion_cuota"
    objects: {
      transaccion: Prisma.$transaccionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cuota: number
      id_transaccion: number | null
      monto: Prisma.Decimal
      fecha_vencimiento: Date | null
      fecha_pago: Date | null
      estatus: $Enums.estatus_transaccion
      pagado: Prisma.Decimal
    }, ExtArgs["result"]["transaccion_cuota"]>
    composites: {}
  }

  type transaccion_cuotaGetPayload<S extends boolean | null | undefined | transaccion_cuotaDefaultArgs> = $Result.GetResult<Prisma.$transaccion_cuotaPayload, S>

  type transaccion_cuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaccion_cuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaccion_cuotaCountAggregateInputType | true
    }

  export interface transaccion_cuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaccion_cuota'], meta: { name: 'transaccion_cuota' } }
    /**
     * Find zero or one Transaccion_cuota that matches the filter.
     * @param {transaccion_cuotaFindUniqueArgs} args - Arguments to find a Transaccion_cuota
     * @example
     * // Get one Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaccion_cuotaFindUniqueArgs>(args: SelectSubset<T, transaccion_cuotaFindUniqueArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaccion_cuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaccion_cuotaFindUniqueOrThrowArgs} args - Arguments to find a Transaccion_cuota
     * @example
     * // Get one Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaccion_cuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, transaccion_cuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaccion_cuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaFindFirstArgs} args - Arguments to find a Transaccion_cuota
     * @example
     * // Get one Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaccion_cuotaFindFirstArgs>(args?: SelectSubset<T, transaccion_cuotaFindFirstArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaccion_cuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaFindFirstOrThrowArgs} args - Arguments to find a Transaccion_cuota
     * @example
     * // Get one Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaccion_cuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, transaccion_cuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaccion_cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaccion_cuotas
     * const transaccion_cuotas = await prisma.transaccion_cuota.findMany()
     * 
     * // Get first 10 Transaccion_cuotas
     * const transaccion_cuotas = await prisma.transaccion_cuota.findMany({ take: 10 })
     * 
     * // Only select the `id_cuota`
     * const transaccion_cuotaWithId_cuotaOnly = await prisma.transaccion_cuota.findMany({ select: { id_cuota: true } })
     * 
     */
    findMany<T extends transaccion_cuotaFindManyArgs>(args?: SelectSubset<T, transaccion_cuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaccion_cuota.
     * @param {transaccion_cuotaCreateArgs} args - Arguments to create a Transaccion_cuota.
     * @example
     * // Create one Transaccion_cuota
     * const Transaccion_cuota = await prisma.transaccion_cuota.create({
     *   data: {
     *     // ... data to create a Transaccion_cuota
     *   }
     * })
     * 
     */
    create<T extends transaccion_cuotaCreateArgs>(args: SelectSubset<T, transaccion_cuotaCreateArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaccion_cuotas.
     * @param {transaccion_cuotaCreateManyArgs} args - Arguments to create many Transaccion_cuotas.
     * @example
     * // Create many Transaccion_cuotas
     * const transaccion_cuota = await prisma.transaccion_cuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaccion_cuotaCreateManyArgs>(args?: SelectSubset<T, transaccion_cuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaccion_cuotas and returns the data saved in the database.
     * @param {transaccion_cuotaCreateManyAndReturnArgs} args - Arguments to create many Transaccion_cuotas.
     * @example
     * // Create many Transaccion_cuotas
     * const transaccion_cuota = await prisma.transaccion_cuota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaccion_cuotas and only return the `id_cuota`
     * const transaccion_cuotaWithId_cuotaOnly = await prisma.transaccion_cuota.createManyAndReturn({
     *   select: { id_cuota: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaccion_cuotaCreateManyAndReturnArgs>(args?: SelectSubset<T, transaccion_cuotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaccion_cuota.
     * @param {transaccion_cuotaDeleteArgs} args - Arguments to delete one Transaccion_cuota.
     * @example
     * // Delete one Transaccion_cuota
     * const Transaccion_cuota = await prisma.transaccion_cuota.delete({
     *   where: {
     *     // ... filter to delete one Transaccion_cuota
     *   }
     * })
     * 
     */
    delete<T extends transaccion_cuotaDeleteArgs>(args: SelectSubset<T, transaccion_cuotaDeleteArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaccion_cuota.
     * @param {transaccion_cuotaUpdateArgs} args - Arguments to update one Transaccion_cuota.
     * @example
     * // Update one Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaccion_cuotaUpdateArgs>(args: SelectSubset<T, transaccion_cuotaUpdateArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaccion_cuotas.
     * @param {transaccion_cuotaDeleteManyArgs} args - Arguments to filter Transaccion_cuotas to delete.
     * @example
     * // Delete a few Transaccion_cuotas
     * const { count } = await prisma.transaccion_cuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaccion_cuotaDeleteManyArgs>(args?: SelectSubset<T, transaccion_cuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaccion_cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaccion_cuotas
     * const transaccion_cuota = await prisma.transaccion_cuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaccion_cuotaUpdateManyArgs>(args: SelectSubset<T, transaccion_cuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaccion_cuotas and returns the data updated in the database.
     * @param {transaccion_cuotaUpdateManyAndReturnArgs} args - Arguments to update many Transaccion_cuotas.
     * @example
     * // Update many Transaccion_cuotas
     * const transaccion_cuota = await prisma.transaccion_cuota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaccion_cuotas and only return the `id_cuota`
     * const transaccion_cuotaWithId_cuotaOnly = await prisma.transaccion_cuota.updateManyAndReturn({
     *   select: { id_cuota: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaccion_cuotaUpdateManyAndReturnArgs>(args: SelectSubset<T, transaccion_cuotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaccion_cuota.
     * @param {transaccion_cuotaUpsertArgs} args - Arguments to update or create a Transaccion_cuota.
     * @example
     * // Update or create a Transaccion_cuota
     * const transaccion_cuota = await prisma.transaccion_cuota.upsert({
     *   create: {
     *     // ... data to create a Transaccion_cuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaccion_cuota we want to update
     *   }
     * })
     */
    upsert<T extends transaccion_cuotaUpsertArgs>(args: SelectSubset<T, transaccion_cuotaUpsertArgs<ExtArgs>>): Prisma__transaccion_cuotaClient<$Result.GetResult<Prisma.$transaccion_cuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaccion_cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaCountArgs} args - Arguments to filter Transaccion_cuotas to count.
     * @example
     * // Count the number of Transaccion_cuotas
     * const count = await prisma.transaccion_cuota.count({
     *   where: {
     *     // ... the filter for the Transaccion_cuotas we want to count
     *   }
     * })
    **/
    count<T extends transaccion_cuotaCountArgs>(
      args?: Subset<T, transaccion_cuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaccion_cuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaccion_cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaccion_cuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaccion_cuotaAggregateArgs>(args: Subset<T, Transaccion_cuotaAggregateArgs>): Prisma.PrismaPromise<GetTransaccion_cuotaAggregateType<T>>

    /**
     * Group by Transaccion_cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaccion_cuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaccion_cuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaccion_cuotaGroupByArgs['orderBy'] }
        : { orderBy?: transaccion_cuotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaccion_cuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaccion_cuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaccion_cuota model
   */
  readonly fields: transaccion_cuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaccion_cuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaccion_cuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaccion<T extends transaccion_cuota$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, transaccion_cuota$transaccionArgs<ExtArgs>>): Prisma__transaccionClient<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaccion_cuota model
   */
  interface transaccion_cuotaFieldRefs {
    readonly id_cuota: FieldRef<"transaccion_cuota", 'Int'>
    readonly id_transaccion: FieldRef<"transaccion_cuota", 'Int'>
    readonly monto: FieldRef<"transaccion_cuota", 'Decimal'>
    readonly fecha_vencimiento: FieldRef<"transaccion_cuota", 'DateTime'>
    readonly fecha_pago: FieldRef<"transaccion_cuota", 'DateTime'>
    readonly estatus: FieldRef<"transaccion_cuota", 'estatus_transaccion'>
    readonly pagado: FieldRef<"transaccion_cuota", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * transaccion_cuota findUnique
   */
  export type transaccion_cuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter, which transaccion_cuota to fetch.
     */
    where: transaccion_cuotaWhereUniqueInput
  }

  /**
   * transaccion_cuota findUniqueOrThrow
   */
  export type transaccion_cuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter, which transaccion_cuota to fetch.
     */
    where: transaccion_cuotaWhereUniqueInput
  }

  /**
   * transaccion_cuota findFirst
   */
  export type transaccion_cuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter, which transaccion_cuota to fetch.
     */
    where?: transaccion_cuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccion_cuotas to fetch.
     */
    orderBy?: transaccion_cuotaOrderByWithRelationInput | transaccion_cuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccion_cuotas.
     */
    cursor?: transaccion_cuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccion_cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccion_cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccion_cuotas.
     */
    distinct?: Transaccion_cuotaScalarFieldEnum | Transaccion_cuotaScalarFieldEnum[]
  }

  /**
   * transaccion_cuota findFirstOrThrow
   */
  export type transaccion_cuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter, which transaccion_cuota to fetch.
     */
    where?: transaccion_cuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccion_cuotas to fetch.
     */
    orderBy?: transaccion_cuotaOrderByWithRelationInput | transaccion_cuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaccion_cuotas.
     */
    cursor?: transaccion_cuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccion_cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccion_cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaccion_cuotas.
     */
    distinct?: Transaccion_cuotaScalarFieldEnum | Transaccion_cuotaScalarFieldEnum[]
  }

  /**
   * transaccion_cuota findMany
   */
  export type transaccion_cuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter, which transaccion_cuotas to fetch.
     */
    where?: transaccion_cuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaccion_cuotas to fetch.
     */
    orderBy?: transaccion_cuotaOrderByWithRelationInput | transaccion_cuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaccion_cuotas.
     */
    cursor?: transaccion_cuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaccion_cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaccion_cuotas.
     */
    skip?: number
    distinct?: Transaccion_cuotaScalarFieldEnum | Transaccion_cuotaScalarFieldEnum[]
  }

  /**
   * transaccion_cuota create
   */
  export type transaccion_cuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a transaccion_cuota.
     */
    data: XOR<transaccion_cuotaCreateInput, transaccion_cuotaUncheckedCreateInput>
  }

  /**
   * transaccion_cuota createMany
   */
  export type transaccion_cuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaccion_cuotas.
     */
    data: transaccion_cuotaCreateManyInput | transaccion_cuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaccion_cuota createManyAndReturn
   */
  export type transaccion_cuotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * The data used to create many transaccion_cuotas.
     */
    data: transaccion_cuotaCreateManyInput | transaccion_cuotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccion_cuota update
   */
  export type transaccion_cuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a transaccion_cuota.
     */
    data: XOR<transaccion_cuotaUpdateInput, transaccion_cuotaUncheckedUpdateInput>
    /**
     * Choose, which transaccion_cuota to update.
     */
    where: transaccion_cuotaWhereUniqueInput
  }

  /**
   * transaccion_cuota updateMany
   */
  export type transaccion_cuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaccion_cuotas.
     */
    data: XOR<transaccion_cuotaUpdateManyMutationInput, transaccion_cuotaUncheckedUpdateManyInput>
    /**
     * Filter which transaccion_cuotas to update
     */
    where?: transaccion_cuotaWhereInput
    /**
     * Limit how many transaccion_cuotas to update.
     */
    limit?: number
  }

  /**
   * transaccion_cuota updateManyAndReturn
   */
  export type transaccion_cuotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * The data used to update transaccion_cuotas.
     */
    data: XOR<transaccion_cuotaUpdateManyMutationInput, transaccion_cuotaUncheckedUpdateManyInput>
    /**
     * Filter which transaccion_cuotas to update
     */
    where?: transaccion_cuotaWhereInput
    /**
     * Limit how many transaccion_cuotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaccion_cuota upsert
   */
  export type transaccion_cuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the transaccion_cuota to update in case it exists.
     */
    where: transaccion_cuotaWhereUniqueInput
    /**
     * In case the transaccion_cuota found by the `where` argument doesn't exist, create a new transaccion_cuota with this data.
     */
    create: XOR<transaccion_cuotaCreateInput, transaccion_cuotaUncheckedCreateInput>
    /**
     * In case the transaccion_cuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaccion_cuotaUpdateInput, transaccion_cuotaUncheckedUpdateInput>
  }

  /**
   * transaccion_cuota delete
   */
  export type transaccion_cuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
    /**
     * Filter which transaccion_cuota to delete.
     */
    where: transaccion_cuotaWhereUniqueInput
  }

  /**
   * transaccion_cuota deleteMany
   */
  export type transaccion_cuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaccion_cuotas to delete
     */
    where?: transaccion_cuotaWhereInput
    /**
     * Limit how many transaccion_cuotas to delete.
     */
    limit?: number
  }

  /**
   * transaccion_cuota.transaccion
   */
  export type transaccion_cuota$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
  }

  /**
   * transaccion_cuota without action
   */
  export type transaccion_cuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion_cuota
     */
    select?: transaccion_cuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion_cuota
     */
    omit?: transaccion_cuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccion_cuotaInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    presupuesto: Decimal | null
    ingreso_minimo: Decimal | null
    egreso_maximo: Decimal | null
    ahorro_mensual: Decimal | null
    dia_corte: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    presupuesto: Decimal | null
    ingreso_minimo: Decimal | null
    egreso_maximo: Decimal | null
    ahorro_mensual: Decimal | null
    dia_corte: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    correo: string | null
    contrasena: string | null
    fecha_creacion: Date | null
    foto_perfil: string | null
    estatus: $Enums.estatus | null
    presupuesto: Decimal | null
    ingreso_minimo: Decimal | null
    egreso_maximo: Decimal | null
    ahorro_mensual: Decimal | null
    dia_corte: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    correo: string | null
    contrasena: string | null
    fecha_creacion: Date | null
    foto_perfil: string | null
    estatus: $Enums.estatus | null
    presupuesto: Decimal | null
    ingreso_minimo: Decimal | null
    egreso_maximo: Decimal | null
    ahorro_mensual: Decimal | null
    dia_corte: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido_paterno: number
    apellido_materno: number
    correo: number
    contrasena: number
    fecha_creacion: number
    foto_perfil: number
    estatus: number
    presupuesto: number
    ingreso_minimo: number
    egreso_maximo: number
    ahorro_mensual: number
    dia_corte: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    presupuesto?: true
    ingreso_minimo?: true
    egreso_maximo?: true
    ahorro_mensual?: true
    dia_corte?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    presupuesto?: true
    ingreso_minimo?: true
    egreso_maximo?: true
    ahorro_mensual?: true
    dia_corte?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    correo?: true
    contrasena?: true
    fecha_creacion?: true
    foto_perfil?: true
    estatus?: true
    presupuesto?: true
    ingreso_minimo?: true
    egreso_maximo?: true
    ahorro_mensual?: true
    dia_corte?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    correo?: true
    contrasena?: true
    fecha_creacion?: true
    foto_perfil?: true
    estatus?: true
    presupuesto?: true
    ingreso_minimo?: true
    egreso_maximo?: true
    ahorro_mensual?: true
    dia_corte?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    correo?: true
    contrasena?: true
    fecha_creacion?: true
    foto_perfil?: true
    estatus?: true
    presupuesto?: true
    ingreso_minimo?: true
    egreso_maximo?: true
    ahorro_mensual?: true
    dia_corte?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido_paterno: string
    apellido_materno: string | null
    correo: string
    contrasena: string
    fecha_creacion: Date
    foto_perfil: string | null
    estatus: $Enums.estatus
    presupuesto: Decimal
    ingreso_minimo: Decimal
    egreso_maximo: Decimal
    ahorro_mensual: Decimal
    dia_corte: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    correo?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    foto_perfil?: boolean
    estatus?: boolean
    presupuesto?: boolean
    ingreso_minimo?: boolean
    egreso_maximo?: boolean
    ahorro_mensual?: boolean
    dia_corte?: boolean
    balance?: boolean | usuario$balanceArgs<ExtArgs>
    categoria?: boolean | usuario$categoriaArgs<ExtArgs>
    notificacion?: boolean | usuario$notificacionArgs<ExtArgs>
    perfil?: boolean | usuario$perfilArgs<ExtArgs>
    persona?: boolean | usuario$personaArgs<ExtArgs>
    subcategoria?: boolean | usuario$subcategoriaArgs<ExtArgs>
    transaccion?: boolean | usuario$transaccionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    correo?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    foto_perfil?: boolean
    estatus?: boolean
    presupuesto?: boolean
    ingreso_minimo?: boolean
    egreso_maximo?: boolean
    ahorro_mensual?: boolean
    dia_corte?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    correo?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    foto_perfil?: boolean
    estatus?: boolean
    presupuesto?: boolean
    ingreso_minimo?: boolean
    egreso_maximo?: boolean
    ahorro_mensual?: boolean
    dia_corte?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    correo?: boolean
    contrasena?: boolean
    fecha_creacion?: boolean
    foto_perfil?: boolean
    estatus?: boolean
    presupuesto?: boolean
    ingreso_minimo?: boolean
    egreso_maximo?: boolean
    ahorro_mensual?: boolean
    dia_corte?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido_paterno" | "apellido_materno" | "correo" | "contrasena" | "fecha_creacion" | "foto_perfil" | "estatus" | "presupuesto" | "ingreso_minimo" | "egreso_maximo" | "ahorro_mensual" | "dia_corte", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balance?: boolean | usuario$balanceArgs<ExtArgs>
    categoria?: boolean | usuario$categoriaArgs<ExtArgs>
    notificacion?: boolean | usuario$notificacionArgs<ExtArgs>
    perfil?: boolean | usuario$perfilArgs<ExtArgs>
    persona?: boolean | usuario$personaArgs<ExtArgs>
    subcategoria?: boolean | usuario$subcategoriaArgs<ExtArgs>
    transaccion?: boolean | usuario$transaccionArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      balance: Prisma.$balancePayload<ExtArgs>[]
      categoria: Prisma.$categoriaPayload<ExtArgs>[]
      notificacion: Prisma.$notificacionPayload<ExtArgs>[]
      perfil: Prisma.$perfilPayload<ExtArgs>[]
      persona: Prisma.$personaPayload<ExtArgs>[]
      subcategoria: Prisma.$subcategoriaPayload<ExtArgs>[]
      transaccion: Prisma.$transaccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido_paterno: string
      apellido_materno: string | null
      correo: string
      contrasena: string
      fecha_creacion: Date
      foto_perfil: string | null
      estatus: $Enums.estatus
      presupuesto: Prisma.Decimal
      ingreso_minimo: Prisma.Decimal
      egreso_maximo: Prisma.Decimal
      ahorro_mensual: Prisma.Decimal
      dia_corte: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balance<T extends usuario$balanceArgs<ExtArgs> = {}>(args?: Subset<T, usuario$balanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends usuario$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$categoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacion<T extends usuario$notificacionArgs<ExtArgs> = {}>(args?: Subset<T, usuario$notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perfil<T extends usuario$perfilArgs<ExtArgs> = {}>(args?: Subset<T, usuario$perfilArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    persona<T extends usuario$personaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$personaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcategoria<T extends usuario$subcategoriaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$subcategoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subcategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaccion<T extends usuario$transaccionArgs<ExtArgs> = {}>(args?: Subset<T, usuario$transaccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly apellido_paterno: FieldRef<"usuario", 'String'>
    readonly apellido_materno: FieldRef<"usuario", 'String'>
    readonly correo: FieldRef<"usuario", 'String'>
    readonly contrasena: FieldRef<"usuario", 'String'>
    readonly fecha_creacion: FieldRef<"usuario", 'DateTime'>
    readonly foto_perfil: FieldRef<"usuario", 'String'>
    readonly estatus: FieldRef<"usuario", 'estatus'>
    readonly presupuesto: FieldRef<"usuario", 'Decimal'>
    readonly ingreso_minimo: FieldRef<"usuario", 'Decimal'>
    readonly egreso_maximo: FieldRef<"usuario", 'Decimal'>
    readonly ahorro_mensual: FieldRef<"usuario", 'Decimal'>
    readonly dia_corte: FieldRef<"usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.balance
   */
  export type usuario$balanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    where?: balanceWhereInput
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    cursor?: balanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * usuario.categoria
   */
  export type usuario$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    cursor?: categoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * usuario.notificacion
   */
  export type usuario$notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificacion
     */
    select?: notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificacion
     */
    omit?: notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionInclude<ExtArgs> | null
    where?: notificacionWhereInput
    orderBy?: notificacionOrderByWithRelationInput | notificacionOrderByWithRelationInput[]
    cursor?: notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionScalarFieldEnum | NotificacionScalarFieldEnum[]
  }

  /**
   * usuario.perfil
   */
  export type usuario$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfil
     */
    select?: perfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfil
     */
    omit?: perfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfilInclude<ExtArgs> | null
    where?: perfilWhereInput
    orderBy?: perfilOrderByWithRelationInput | perfilOrderByWithRelationInput[]
    cursor?: perfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * usuario.persona
   */
  export type usuario$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    where?: personaWhereInput
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    cursor?: personaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * usuario.subcategoria
   */
  export type usuario$subcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcategoria
     */
    select?: subcategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subcategoria
     */
    omit?: subcategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subcategoriaInclude<ExtArgs> | null
    where?: subcategoriaWhereInput
    orderBy?: subcategoriaOrderByWithRelationInput | subcategoriaOrderByWithRelationInput[]
    cursor?: subcategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoriaScalarFieldEnum | SubcategoriaScalarFieldEnum[]
  }

  /**
   * usuario.transaccion
   */
  export type usuario$transaccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaccion
     */
    select?: transaccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaccion
     */
    omit?: transaccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaccionInclude<ExtArgs> | null
    where?: transaccionWhereInput
    orderBy?: transaccionOrderByWithRelationInput | transaccionOrderByWithRelationInput[]
    cursor?: transaccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaccionScalarFieldEnum | TransaccionScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model verificacion
   */

  export type AggregateVerificacion = {
    _count: VerificacionCountAggregateOutputType | null
    _avg: VerificacionAvgAggregateOutputType | null
    _sum: VerificacionSumAggregateOutputType | null
    _min: VerificacionMinAggregateOutputType | null
    _max: VerificacionMaxAggregateOutputType | null
  }

  export type VerificacionAvgAggregateOutputType = {
    id_verificacon: number | null
    codigo: number | null
  }

  export type VerificacionSumAggregateOutputType = {
    id_verificacon: number | null
    codigo: number | null
  }

  export type VerificacionMinAggregateOutputType = {
    id_verificacon: number | null
    nombre: string | null
    correo: string | null
    codigo: number | null
    creado_en: Date | null
    expiracion: Date | null
  }

  export type VerificacionMaxAggregateOutputType = {
    id_verificacon: number | null
    nombre: string | null
    correo: string | null
    codigo: number | null
    creado_en: Date | null
    expiracion: Date | null
  }

  export type VerificacionCountAggregateOutputType = {
    id_verificacon: number
    nombre: number
    correo: number
    codigo: number
    creado_en: number
    expiracion: number
    _all: number
  }


  export type VerificacionAvgAggregateInputType = {
    id_verificacon?: true
    codigo?: true
  }

  export type VerificacionSumAggregateInputType = {
    id_verificacon?: true
    codigo?: true
  }

  export type VerificacionMinAggregateInputType = {
    id_verificacon?: true
    nombre?: true
    correo?: true
    codigo?: true
    creado_en?: true
    expiracion?: true
  }

  export type VerificacionMaxAggregateInputType = {
    id_verificacon?: true
    nombre?: true
    correo?: true
    codigo?: true
    creado_en?: true
    expiracion?: true
  }

  export type VerificacionCountAggregateInputType = {
    id_verificacon?: true
    nombre?: true
    correo?: true
    codigo?: true
    creado_en?: true
    expiracion?: true
    _all?: true
  }

  export type VerificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificacion to aggregate.
     */
    where?: verificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificacions to fetch.
     */
    orderBy?: verificacionOrderByWithRelationInput | verificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verificacions
    **/
    _count?: true | VerificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificacionMaxAggregateInputType
  }

  export type GetVerificacionAggregateType<T extends VerificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificacion[P]>
      : GetScalarType<T[P], AggregateVerificacion[P]>
  }




  export type verificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verificacionWhereInput
    orderBy?: verificacionOrderByWithAggregationInput | verificacionOrderByWithAggregationInput[]
    by: VerificacionScalarFieldEnum[] | VerificacionScalarFieldEnum
    having?: verificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificacionCountAggregateInputType | true
    _avg?: VerificacionAvgAggregateInputType
    _sum?: VerificacionSumAggregateInputType
    _min?: VerificacionMinAggregateInputType
    _max?: VerificacionMaxAggregateInputType
  }

  export type VerificacionGroupByOutputType = {
    id_verificacon: number
    nombre: string
    correo: string
    codigo: number
    creado_en: Date
    expiracion: Date
    _count: VerificacionCountAggregateOutputType | null
    _avg: VerificacionAvgAggregateOutputType | null
    _sum: VerificacionSumAggregateOutputType | null
    _min: VerificacionMinAggregateOutputType | null
    _max: VerificacionMaxAggregateOutputType | null
  }

  type GetVerificacionGroupByPayload<T extends verificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificacionGroupByOutputType[P]>
            : GetScalarType<T[P], VerificacionGroupByOutputType[P]>
        }
      >
    >


  export type verificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_verificacon?: boolean
    nombre?: boolean
    correo?: boolean
    codigo?: boolean
    creado_en?: boolean
    expiracion?: boolean
  }, ExtArgs["result"]["verificacion"]>

  export type verificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_verificacon?: boolean
    nombre?: boolean
    correo?: boolean
    codigo?: boolean
    creado_en?: boolean
    expiracion?: boolean
  }, ExtArgs["result"]["verificacion"]>

  export type verificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_verificacon?: boolean
    nombre?: boolean
    correo?: boolean
    codigo?: boolean
    creado_en?: boolean
    expiracion?: boolean
  }, ExtArgs["result"]["verificacion"]>

  export type verificacionSelectScalar = {
    id_verificacon?: boolean
    nombre?: boolean
    correo?: boolean
    codigo?: boolean
    creado_en?: boolean
    expiracion?: boolean
  }

  export type verificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_verificacon" | "nombre" | "correo" | "codigo" | "creado_en" | "expiracion", ExtArgs["result"]["verificacion"]>

  export type $verificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verificacion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_verificacon: number
      nombre: string
      correo: string
      codigo: number
      creado_en: Date
      expiracion: Date
    }, ExtArgs["result"]["verificacion"]>
    composites: {}
  }

  type verificacionGetPayload<S extends boolean | null | undefined | verificacionDefaultArgs> = $Result.GetResult<Prisma.$verificacionPayload, S>

  type verificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificacionCountAggregateInputType | true
    }

  export interface verificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verificacion'], meta: { name: 'verificacion' } }
    /**
     * Find zero or one Verificacion that matches the filter.
     * @param {verificacionFindUniqueArgs} args - Arguments to find a Verificacion
     * @example
     * // Get one Verificacion
     * const verificacion = await prisma.verificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verificacionFindUniqueArgs>(args: SelectSubset<T, verificacionFindUniqueArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verificacionFindUniqueOrThrowArgs} args - Arguments to find a Verificacion
     * @example
     * // Get one Verificacion
     * const verificacion = await prisma.verificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, verificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionFindFirstArgs} args - Arguments to find a Verificacion
     * @example
     * // Get one Verificacion
     * const verificacion = await prisma.verificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verificacionFindFirstArgs>(args?: SelectSubset<T, verificacionFindFirstArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionFindFirstOrThrowArgs} args - Arguments to find a Verificacion
     * @example
     * // Get one Verificacion
     * const verificacion = await prisma.verificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, verificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verificacions
     * const verificacions = await prisma.verificacion.findMany()
     * 
     * // Get first 10 Verificacions
     * const verificacions = await prisma.verificacion.findMany({ take: 10 })
     * 
     * // Only select the `id_verificacon`
     * const verificacionWithId_verificaconOnly = await prisma.verificacion.findMany({ select: { id_verificacon: true } })
     * 
     */
    findMany<T extends verificacionFindManyArgs>(args?: SelectSubset<T, verificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verificacion.
     * @param {verificacionCreateArgs} args - Arguments to create a Verificacion.
     * @example
     * // Create one Verificacion
     * const Verificacion = await prisma.verificacion.create({
     *   data: {
     *     // ... data to create a Verificacion
     *   }
     * })
     * 
     */
    create<T extends verificacionCreateArgs>(args: SelectSubset<T, verificacionCreateArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verificacions.
     * @param {verificacionCreateManyArgs} args - Arguments to create many Verificacions.
     * @example
     * // Create many Verificacions
     * const verificacion = await prisma.verificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verificacionCreateManyArgs>(args?: SelectSubset<T, verificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verificacions and returns the data saved in the database.
     * @param {verificacionCreateManyAndReturnArgs} args - Arguments to create many Verificacions.
     * @example
     * // Create many Verificacions
     * const verificacion = await prisma.verificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verificacions and only return the `id_verificacon`
     * const verificacionWithId_verificaconOnly = await prisma.verificacion.createManyAndReturn({
     *   select: { id_verificacon: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, verificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verificacion.
     * @param {verificacionDeleteArgs} args - Arguments to delete one Verificacion.
     * @example
     * // Delete one Verificacion
     * const Verificacion = await prisma.verificacion.delete({
     *   where: {
     *     // ... filter to delete one Verificacion
     *   }
     * })
     * 
     */
    delete<T extends verificacionDeleteArgs>(args: SelectSubset<T, verificacionDeleteArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verificacion.
     * @param {verificacionUpdateArgs} args - Arguments to update one Verificacion.
     * @example
     * // Update one Verificacion
     * const verificacion = await prisma.verificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verificacionUpdateArgs>(args: SelectSubset<T, verificacionUpdateArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verificacions.
     * @param {verificacionDeleteManyArgs} args - Arguments to filter Verificacions to delete.
     * @example
     * // Delete a few Verificacions
     * const { count } = await prisma.verificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verificacionDeleteManyArgs>(args?: SelectSubset<T, verificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verificacions
     * const verificacion = await prisma.verificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verificacionUpdateManyArgs>(args: SelectSubset<T, verificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verificacions and returns the data updated in the database.
     * @param {verificacionUpdateManyAndReturnArgs} args - Arguments to update many Verificacions.
     * @example
     * // Update many Verificacions
     * const verificacion = await prisma.verificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verificacions and only return the `id_verificacon`
     * const verificacionWithId_verificaconOnly = await prisma.verificacion.updateManyAndReturn({
     *   select: { id_verificacon: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends verificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, verificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verificacion.
     * @param {verificacionUpsertArgs} args - Arguments to update or create a Verificacion.
     * @example
     * // Update or create a Verificacion
     * const verificacion = await prisma.verificacion.upsert({
     *   create: {
     *     // ... data to create a Verificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verificacion we want to update
     *   }
     * })
     */
    upsert<T extends verificacionUpsertArgs>(args: SelectSubset<T, verificacionUpsertArgs<ExtArgs>>): Prisma__verificacionClient<$Result.GetResult<Prisma.$verificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionCountArgs} args - Arguments to filter Verificacions to count.
     * @example
     * // Count the number of Verificacions
     * const count = await prisma.verificacion.count({
     *   where: {
     *     // ... the filter for the Verificacions we want to count
     *   }
     * })
    **/
    count<T extends verificacionCountArgs>(
      args?: Subset<T, verificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificacionAggregateArgs>(args: Subset<T, VerificacionAggregateArgs>): Prisma.PrismaPromise<GetVerificacionAggregateType<T>>

    /**
     * Group by Verificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verificacionGroupByArgs['orderBy'] }
        : { orderBy?: verificacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verificacion model
   */
  readonly fields: verificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verificacion model
   */
  interface verificacionFieldRefs {
    readonly id_verificacon: FieldRef<"verificacion", 'Int'>
    readonly nombre: FieldRef<"verificacion", 'String'>
    readonly correo: FieldRef<"verificacion", 'String'>
    readonly codigo: FieldRef<"verificacion", 'Int'>
    readonly creado_en: FieldRef<"verificacion", 'DateTime'>
    readonly expiracion: FieldRef<"verificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verificacion findUnique
   */
  export type verificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter, which verificacion to fetch.
     */
    where: verificacionWhereUniqueInput
  }

  /**
   * verificacion findUniqueOrThrow
   */
  export type verificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter, which verificacion to fetch.
     */
    where: verificacionWhereUniqueInput
  }

  /**
   * verificacion findFirst
   */
  export type verificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter, which verificacion to fetch.
     */
    where?: verificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificacions to fetch.
     */
    orderBy?: verificacionOrderByWithRelationInput | verificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificacions.
     */
    cursor?: verificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificacions.
     */
    distinct?: VerificacionScalarFieldEnum | VerificacionScalarFieldEnum[]
  }

  /**
   * verificacion findFirstOrThrow
   */
  export type verificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter, which verificacion to fetch.
     */
    where?: verificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificacions to fetch.
     */
    orderBy?: verificacionOrderByWithRelationInput | verificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verificacions.
     */
    cursor?: verificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verificacions.
     */
    distinct?: VerificacionScalarFieldEnum | VerificacionScalarFieldEnum[]
  }

  /**
   * verificacion findMany
   */
  export type verificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter, which verificacions to fetch.
     */
    where?: verificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verificacions to fetch.
     */
    orderBy?: verificacionOrderByWithRelationInput | verificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verificacions.
     */
    cursor?: verificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verificacions.
     */
    skip?: number
    distinct?: VerificacionScalarFieldEnum | VerificacionScalarFieldEnum[]
  }

  /**
   * verificacion create
   */
  export type verificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * The data needed to create a verificacion.
     */
    data: XOR<verificacionCreateInput, verificacionUncheckedCreateInput>
  }

  /**
   * verificacion createMany
   */
  export type verificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verificacions.
     */
    data: verificacionCreateManyInput | verificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verificacion createManyAndReturn
   */
  export type verificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * The data used to create many verificacions.
     */
    data: verificacionCreateManyInput | verificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verificacion update
   */
  export type verificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * The data needed to update a verificacion.
     */
    data: XOR<verificacionUpdateInput, verificacionUncheckedUpdateInput>
    /**
     * Choose, which verificacion to update.
     */
    where: verificacionWhereUniqueInput
  }

  /**
   * verificacion updateMany
   */
  export type verificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verificacions.
     */
    data: XOR<verificacionUpdateManyMutationInput, verificacionUncheckedUpdateManyInput>
    /**
     * Filter which verificacions to update
     */
    where?: verificacionWhereInput
    /**
     * Limit how many verificacions to update.
     */
    limit?: number
  }

  /**
   * verificacion updateManyAndReturn
   */
  export type verificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * The data used to update verificacions.
     */
    data: XOR<verificacionUpdateManyMutationInput, verificacionUncheckedUpdateManyInput>
    /**
     * Filter which verificacions to update
     */
    where?: verificacionWhereInput
    /**
     * Limit how many verificacions to update.
     */
    limit?: number
  }

  /**
   * verificacion upsert
   */
  export type verificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * The filter to search for the verificacion to update in case it exists.
     */
    where: verificacionWhereUniqueInput
    /**
     * In case the verificacion found by the `where` argument doesn't exist, create a new verificacion with this data.
     */
    create: XOR<verificacionCreateInput, verificacionUncheckedCreateInput>
    /**
     * In case the verificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificacionUpdateInput, verificacionUncheckedUpdateInput>
  }

  /**
   * verificacion delete
   */
  export type verificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
    /**
     * Filter which verificacion to delete.
     */
    where: verificacionWhereUniqueInput
  }

  /**
   * verificacion deleteMany
   */
  export type verificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verificacions to delete
     */
    where?: verificacionWhereInput
    /**
     * Limit how many verificacions to delete.
     */
    limit?: number
  }

  /**
   * verificacion without action
   */
  export type verificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verificacion
     */
    select?: verificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verificacion
     */
    omit?: verificacionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BalanceScalarFieldEnum: {
    id_balance: 'id_balance',
    total_ingreso: 'total_ingreso',
    total_egreso: 'total_egreso',
    resultado_neto: 'resultado_neto',
    presupuesto: 'presupuesto',
    ahorro_mensual: 'ahorro_mensual',
    resultado_final: 'resultado_final',
    id_usuario: 'id_usuario'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    tipo: 'tipo',
    estatus: 'estatus',
    flujo: 'flujo',
    id_usuario: 'id_usuario',
    mostrar_panel: 'mostrar_panel',
    icono: 'icono'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const NotificacionScalarFieldEnum: {
    id_notificacion: 'id_notificacion',
    descripcion: 'descripcion',
    fecha_notificacion: 'fecha_notificacion',
    id_usuario: 'id_usuario',
    id_perfil: 'id_perfil'
  };

  export type NotificacionScalarFieldEnum = (typeof NotificacionScalarFieldEnum)[keyof typeof NotificacionScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id_perfil: 'id_perfil',
    nombre: 'nombre',
    icono: 'icono',
    fecha_creacion: 'fecha_creacion',
    estatus: 'estatus',
    id_usuario: 'id_usuario',
    pin: 'pin',
    super_usuario: 'super_usuario'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    id_persona: 'id_persona',
    nombre: 'nombre',
    tipo: 'tipo',
    estatus: 'estatus',
    id_usuario: 'id_usuario'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const SubcategoriaScalarFieldEnum: {
    id_subcategoria: 'id_subcategoria',
    nombre: 'nombre',
    tipo: 'tipo',
    estatus: 'estatus',
    flujo: 'flujo',
    id_categoria: 'id_categoria',
    mostrar_panel: 'mostrar_panel',
    id_usuario: 'id_usuario',
    icono: 'icono'
  };

  export type SubcategoriaScalarFieldEnum = (typeof SubcategoriaScalarFieldEnum)[keyof typeof SubcategoriaScalarFieldEnum]


  export const TransaccionScalarFieldEnum: {
    id_transaccion: 'id_transaccion',
    tipo: 'tipo',
    fecha_transaccion: 'fecha_transaccion',
    nota: 'nota',
    monto_total: 'monto_total',
    plazos: 'plazos',
    estatus: 'estatus',
    id_categoria: 'id_categoria',
    id_usuario: 'id_usuario',
    id_perfil: 'id_perfil',
    id_subcategoria: 'id_subcategoria',
    id_persona: 'id_persona'
  };

  export type TransaccionScalarFieldEnum = (typeof TransaccionScalarFieldEnum)[keyof typeof TransaccionScalarFieldEnum]


  export const Transaccion_cuotaScalarFieldEnum: {
    id_cuota: 'id_cuota',
    id_transaccion: 'id_transaccion',
    monto: 'monto',
    fecha_vencimiento: 'fecha_vencimiento',
    fecha_pago: 'fecha_pago',
    estatus: 'estatus',
    pagado: 'pagado'
  };

  export type Transaccion_cuotaScalarFieldEnum = (typeof Transaccion_cuotaScalarFieldEnum)[keyof typeof Transaccion_cuotaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    correo: 'correo',
    contrasena: 'contrasena',
    fecha_creacion: 'fecha_creacion',
    foto_perfil: 'foto_perfil',
    estatus: 'estatus',
    presupuesto: 'presupuesto',
    ingreso_minimo: 'ingreso_minimo',
    egreso_maximo: 'egreso_maximo',
    ahorro_mensual: 'ahorro_mensual',
    dia_corte: 'dia_corte'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VerificacionScalarFieldEnum: {
    id_verificacon: 'id_verificacon',
    nombre: 'nombre',
    correo: 'correo',
    codigo: 'codigo',
    creado_en: 'creado_en',
    expiracion: 'expiracion'
  };

  export type VerificacionScalarFieldEnum = (typeof VerificacionScalarFieldEnum)[keyof typeof VerificacionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'tipo_movimiento'
   */
  export type Enumtipo_movimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_movimiento'>
    


  /**
   * Reference to a field of type 'tipo_movimiento[]'
   */
  export type ListEnumtipo_movimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_movimiento[]'>
    


  /**
   * Reference to a field of type 'estatus'
   */
  export type EnumestatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estatus'>
    


  /**
   * Reference to a field of type 'estatus[]'
   */
  export type ListEnumestatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estatus[]'>
    


  /**
   * Reference to a field of type 'flujo_efectivo'
   */
  export type Enumflujo_efectivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'flujo_efectivo'>
    


  /**
   * Reference to a field of type 'flujo_efectivo[]'
   */
  export type ListEnumflujo_efectivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'flujo_efectivo[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'tipo_persona'
   */
  export type Enumtipo_personaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_persona'>
    


  /**
   * Reference to a field of type 'tipo_persona[]'
   */
  export type ListEnumtipo_personaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_persona[]'>
    


  /**
   * Reference to a field of type 'estatus_transaccion'
   */
  export type Enumestatus_transaccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estatus_transaccion'>
    


  /**
   * Reference to a field of type 'estatus_transaccion[]'
   */
  export type ListEnumestatus_transaccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estatus_transaccion[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type balanceWhereInput = {
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    id_balance?: IntFilter<"balance"> | number
    total_ingreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    id_usuario?: IntNullableFilter<"balance"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type balanceOrderByWithRelationInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
  }

  export type balanceWhereUniqueInput = Prisma.AtLeast<{
    id_balance?: number
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    total_ingreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    id_usuario?: IntNullableFilter<"balance"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id_balance">

  export type balanceOrderByWithAggregationInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: balanceCountOrderByAggregateInput
    _avg?: balanceAvgOrderByAggregateInput
    _max?: balanceMaxOrderByAggregateInput
    _min?: balanceMinOrderByAggregateInput
    _sum?: balanceSumOrderByAggregateInput
  }

  export type balanceScalarWhereWithAggregatesInput = {
    AND?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    OR?: balanceScalarWhereWithAggregatesInput[]
    NOT?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    id_balance?: IntWithAggregatesFilter<"balance"> | number
    total_ingreso?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalWithAggregatesFilter<"balance"> | Decimal | DecimalJsLike | number | string
    id_usuario?: IntNullableWithAggregatesFilter<"balance"> | number | null
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    nombre?: StringFilter<"categoria"> | string
    tipo?: Enumtipo_movimientoFilter<"categoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"categoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"categoria"> | $Enums.flujo_efectivo
    id_usuario?: IntNullableFilter<"categoria"> | number | null
    mostrar_panel?: BoolFilter<"categoria"> | boolean
    icono?: IntFilter<"categoria"> | number
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    subcategoria?: SubcategoriaListRelationFilter
    transaccion?: TransaccionListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    mostrar_panel?: SortOrder
    icono?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    subcategoria?: subcategoriaOrderByRelationAggregateInput
    transaccion?: transaccionOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    nombre?: StringFilter<"categoria"> | string
    tipo?: Enumtipo_movimientoFilter<"categoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"categoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"categoria"> | $Enums.flujo_efectivo
    id_usuario?: IntNullableFilter<"categoria"> | number | null
    mostrar_panel?: BoolFilter<"categoria"> | boolean
    icono?: IntFilter<"categoria"> | number
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    subcategoria?: SubcategoriaListRelationFilter
    transaccion?: TransaccionListRelationFilter
  }, "id_categoria">

  export type categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    mostrar_panel?: SortOrder
    icono?: SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categoria"> | number
    nombre?: StringWithAggregatesFilter<"categoria"> | string
    tipo?: Enumtipo_movimientoWithAggregatesFilter<"categoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusWithAggregatesFilter<"categoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoWithAggregatesFilter<"categoria"> | $Enums.flujo_efectivo
    id_usuario?: IntNullableWithAggregatesFilter<"categoria"> | number | null
    mostrar_panel?: BoolWithAggregatesFilter<"categoria"> | boolean
    icono?: IntWithAggregatesFilter<"categoria"> | number
  }

  export type notificacionWhereInput = {
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    descripcion?: StringFilter<"notificacion"> | string
    fecha_notificacion?: DateTimeFilter<"notificacion"> | Date | string
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_perfil?: IntNullableFilter<"notificacion"> | number | null
    perfil?: XOR<PerfilNullableScalarRelationFilter, perfilWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }

  export type notificacionOrderByWithRelationInput = {
    id_notificacion?: SortOrder
    descripcion?: SortOrder
    fecha_notificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_perfil?: SortOrderInput | SortOrder
    perfil?: perfilOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type notificacionWhereUniqueInput = Prisma.AtLeast<{
    id_notificacion?: number
    AND?: notificacionWhereInput | notificacionWhereInput[]
    OR?: notificacionWhereInput[]
    NOT?: notificacionWhereInput | notificacionWhereInput[]
    descripcion?: StringFilter<"notificacion"> | string
    fecha_notificacion?: DateTimeFilter<"notificacion"> | Date | string
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_perfil?: IntNullableFilter<"notificacion"> | number | null
    perfil?: XOR<PerfilNullableScalarRelationFilter, perfilWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
  }, "id_notificacion">

  export type notificacionOrderByWithAggregationInput = {
    id_notificacion?: SortOrder
    descripcion?: SortOrder
    fecha_notificacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_perfil?: SortOrderInput | SortOrder
    _count?: notificacionCountOrderByAggregateInput
    _avg?: notificacionAvgOrderByAggregateInput
    _max?: notificacionMaxOrderByAggregateInput
    _min?: notificacionMinOrderByAggregateInput
    _sum?: notificacionSumOrderByAggregateInput
  }

  export type notificacionScalarWhereWithAggregatesInput = {
    AND?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    OR?: notificacionScalarWhereWithAggregatesInput[]
    NOT?: notificacionScalarWhereWithAggregatesInput | notificacionScalarWhereWithAggregatesInput[]
    id_notificacion?: IntWithAggregatesFilter<"notificacion"> | number
    descripcion?: StringWithAggregatesFilter<"notificacion"> | string
    fecha_notificacion?: DateTimeWithAggregatesFilter<"notificacion"> | Date | string
    id_usuario?: IntNullableWithAggregatesFilter<"notificacion"> | number | null
    id_perfil?: IntNullableWithAggregatesFilter<"notificacion"> | number | null
  }

  export type perfilWhereInput = {
    AND?: perfilWhereInput | perfilWhereInput[]
    OR?: perfilWhereInput[]
    NOT?: perfilWhereInput | perfilWhereInput[]
    id_perfil?: IntFilter<"perfil"> | number
    nombre?: StringFilter<"perfil"> | string
    icono?: IntNullableFilter<"perfil"> | number | null
    fecha_creacion?: DateTimeFilter<"perfil"> | Date | string
    estatus?: EnumestatusFilter<"perfil"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"perfil"> | number | null
    pin?: StringNullableFilter<"perfil"> | string | null
    super_usuario?: BoolNullableFilter<"perfil"> | boolean | null
    notificacion?: NotificacionListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }

  export type perfilOrderByWithRelationInput = {
    id_perfil?: SortOrder
    nombre?: SortOrder
    icono?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    pin?: SortOrderInput | SortOrder
    super_usuario?: SortOrderInput | SortOrder
    notificacion?: notificacionOrderByRelationAggregateInput
    usuario?: usuarioOrderByWithRelationInput
    transaccion?: transaccionOrderByRelationAggregateInput
  }

  export type perfilWhereUniqueInput = Prisma.AtLeast<{
    id_perfil?: number
    AND?: perfilWhereInput | perfilWhereInput[]
    OR?: perfilWhereInput[]
    NOT?: perfilWhereInput | perfilWhereInput[]
    nombre?: StringFilter<"perfil"> | string
    icono?: IntNullableFilter<"perfil"> | number | null
    fecha_creacion?: DateTimeFilter<"perfil"> | Date | string
    estatus?: EnumestatusFilter<"perfil"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"perfil"> | number | null
    pin?: StringNullableFilter<"perfil"> | string | null
    super_usuario?: BoolNullableFilter<"perfil"> | boolean | null
    notificacion?: NotificacionListRelationFilter
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }, "id_perfil">

  export type perfilOrderByWithAggregationInput = {
    id_perfil?: SortOrder
    nombre?: SortOrder
    icono?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    pin?: SortOrderInput | SortOrder
    super_usuario?: SortOrderInput | SortOrder
    _count?: perfilCountOrderByAggregateInput
    _avg?: perfilAvgOrderByAggregateInput
    _max?: perfilMaxOrderByAggregateInput
    _min?: perfilMinOrderByAggregateInput
    _sum?: perfilSumOrderByAggregateInput
  }

  export type perfilScalarWhereWithAggregatesInput = {
    AND?: perfilScalarWhereWithAggregatesInput | perfilScalarWhereWithAggregatesInput[]
    OR?: perfilScalarWhereWithAggregatesInput[]
    NOT?: perfilScalarWhereWithAggregatesInput | perfilScalarWhereWithAggregatesInput[]
    id_perfil?: IntWithAggregatesFilter<"perfil"> | number
    nombre?: StringWithAggregatesFilter<"perfil"> | string
    icono?: IntNullableWithAggregatesFilter<"perfil"> | number | null
    fecha_creacion?: DateTimeWithAggregatesFilter<"perfil"> | Date | string
    estatus?: EnumestatusWithAggregatesFilter<"perfil"> | $Enums.estatus
    id_usuario?: IntNullableWithAggregatesFilter<"perfil"> | number | null
    pin?: StringNullableWithAggregatesFilter<"perfil"> | string | null
    super_usuario?: BoolNullableWithAggregatesFilter<"perfil"> | boolean | null
  }

  export type personaWhereInput = {
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    id_persona?: IntFilter<"persona"> | number
    nombre?: StringFilter<"persona"> | string
    tipo?: Enumtipo_personaFilter<"persona"> | $Enums.tipo_persona
    estatus?: EnumestatusFilter<"persona"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"persona"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }

  export type personaOrderByWithRelationInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    transaccion?: transaccionOrderByRelationAggregateInput
  }

  export type personaWhereUniqueInput = Prisma.AtLeast<{
    id_persona?: number
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    nombre?: StringFilter<"persona"> | string
    tipo?: Enumtipo_personaFilter<"persona"> | $Enums.tipo_persona
    estatus?: EnumestatusFilter<"persona"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"persona"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }, "id_persona">

  export type personaOrderByWithAggregationInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: personaCountOrderByAggregateInput
    _avg?: personaAvgOrderByAggregateInput
    _max?: personaMaxOrderByAggregateInput
    _min?: personaMinOrderByAggregateInput
    _sum?: personaSumOrderByAggregateInput
  }

  export type personaScalarWhereWithAggregatesInput = {
    AND?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    OR?: personaScalarWhereWithAggregatesInput[]
    NOT?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    id_persona?: IntWithAggregatesFilter<"persona"> | number
    nombre?: StringWithAggregatesFilter<"persona"> | string
    tipo?: Enumtipo_personaWithAggregatesFilter<"persona"> | $Enums.tipo_persona
    estatus?: EnumestatusWithAggregatesFilter<"persona"> | $Enums.estatus
    id_usuario?: IntNullableWithAggregatesFilter<"persona"> | number | null
  }

  export type subcategoriaWhereInput = {
    AND?: subcategoriaWhereInput | subcategoriaWhereInput[]
    OR?: subcategoriaWhereInput[]
    NOT?: subcategoriaWhereInput | subcategoriaWhereInput[]
    id_subcategoria?: IntFilter<"subcategoria"> | number
    nombre?: StringFilter<"subcategoria"> | string
    tipo?: Enumtipo_movimientoFilter<"subcategoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"subcategoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"subcategoria"> | $Enums.flujo_efectivo
    id_categoria?: IntNullableFilter<"subcategoria"> | number | null
    mostrar_panel?: BoolNullableFilter<"subcategoria"> | boolean | null
    id_usuario?: IntNullableFilter<"subcategoria"> | number | null
    icono?: IntFilter<"subcategoria"> | number
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }

  export type subcategoriaOrderByWithRelationInput = {
    id_subcategoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    mostrar_panel?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    icono?: SortOrder
    categoria?: categoriaOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    transaccion?: transaccionOrderByRelationAggregateInput
  }

  export type subcategoriaWhereUniqueInput = Prisma.AtLeast<{
    id_subcategoria?: number
    AND?: subcategoriaWhereInput | subcategoriaWhereInput[]
    OR?: subcategoriaWhereInput[]
    NOT?: subcategoriaWhereInput | subcategoriaWhereInput[]
    nombre?: StringFilter<"subcategoria"> | string
    tipo?: Enumtipo_movimientoFilter<"subcategoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"subcategoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"subcategoria"> | $Enums.flujo_efectivo
    id_categoria?: IntNullableFilter<"subcategoria"> | number | null
    mostrar_panel?: BoolNullableFilter<"subcategoria"> | boolean | null
    id_usuario?: IntNullableFilter<"subcategoria"> | number | null
    icono?: IntFilter<"subcategoria"> | number
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion?: TransaccionListRelationFilter
  }, "id_subcategoria">

  export type subcategoriaOrderByWithAggregationInput = {
    id_subcategoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    mostrar_panel?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    icono?: SortOrder
    _count?: subcategoriaCountOrderByAggregateInput
    _avg?: subcategoriaAvgOrderByAggregateInput
    _max?: subcategoriaMaxOrderByAggregateInput
    _min?: subcategoriaMinOrderByAggregateInput
    _sum?: subcategoriaSumOrderByAggregateInput
  }

  export type subcategoriaScalarWhereWithAggregatesInput = {
    AND?: subcategoriaScalarWhereWithAggregatesInput | subcategoriaScalarWhereWithAggregatesInput[]
    OR?: subcategoriaScalarWhereWithAggregatesInput[]
    NOT?: subcategoriaScalarWhereWithAggregatesInput | subcategoriaScalarWhereWithAggregatesInput[]
    id_subcategoria?: IntWithAggregatesFilter<"subcategoria"> | number
    nombre?: StringWithAggregatesFilter<"subcategoria"> | string
    tipo?: Enumtipo_movimientoWithAggregatesFilter<"subcategoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusWithAggregatesFilter<"subcategoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoWithAggregatesFilter<"subcategoria"> | $Enums.flujo_efectivo
    id_categoria?: IntNullableWithAggregatesFilter<"subcategoria"> | number | null
    mostrar_panel?: BoolNullableWithAggregatesFilter<"subcategoria"> | boolean | null
    id_usuario?: IntNullableWithAggregatesFilter<"subcategoria"> | number | null
    icono?: IntWithAggregatesFilter<"subcategoria"> | number
  }

  export type transaccionWhereInput = {
    AND?: transaccionWhereInput | transaccionWhereInput[]
    OR?: transaccionWhereInput[]
    NOT?: transaccionWhereInput | transaccionWhereInput[]
    id_transaccion?: IntFilter<"transaccion"> | number
    tipo?: Enumtipo_movimientoFilter<"transaccion"> | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFilter<"transaccion"> | Date | string
    nota?: StringNullableFilter<"transaccion"> | string | null
    monto_total?: DecimalFilter<"transaccion"> | Decimal | DecimalJsLike | number | string
    plazos?: IntNullableFilter<"transaccion"> | number | null
    estatus?: Enumestatus_transaccionFilter<"transaccion"> | $Enums.estatus_transaccion
    id_categoria?: IntNullableFilter<"transaccion"> | number | null
    id_usuario?: IntNullableFilter<"transaccion"> | number | null
    id_perfil?: IntNullableFilter<"transaccion"> | number | null
    id_subcategoria?: IntNullableFilter<"transaccion"> | number | null
    id_persona?: IntNullableFilter<"transaccion"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    perfil?: XOR<PerfilNullableScalarRelationFilter, perfilWhereInput> | null
    persona?: XOR<PersonaNullableScalarRelationFilter, personaWhereInput> | null
    subcategoria?: XOR<SubcategoriaNullableScalarRelationFilter, subcategoriaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion_cuota?: Transaccion_cuotaListRelationFilter
  }

  export type transaccionOrderByWithRelationInput = {
    id_transaccion?: SortOrder
    tipo?: SortOrder
    fecha_transaccion?: SortOrder
    nota?: SortOrderInput | SortOrder
    monto_total?: SortOrder
    plazos?: SortOrderInput | SortOrder
    estatus?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_perfil?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    id_persona?: SortOrderInput | SortOrder
    categoria?: categoriaOrderByWithRelationInput
    perfil?: perfilOrderByWithRelationInput
    persona?: personaOrderByWithRelationInput
    subcategoria?: subcategoriaOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    transaccion_cuota?: transaccion_cuotaOrderByRelationAggregateInput
  }

  export type transaccionWhereUniqueInput = Prisma.AtLeast<{
    id_transaccion?: number
    AND?: transaccionWhereInput | transaccionWhereInput[]
    OR?: transaccionWhereInput[]
    NOT?: transaccionWhereInput | transaccionWhereInput[]
    tipo?: Enumtipo_movimientoFilter<"transaccion"> | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFilter<"transaccion"> | Date | string
    nota?: StringNullableFilter<"transaccion"> | string | null
    monto_total?: DecimalFilter<"transaccion"> | Decimal | DecimalJsLike | number | string
    plazos?: IntNullableFilter<"transaccion"> | number | null
    estatus?: Enumestatus_transaccionFilter<"transaccion"> | $Enums.estatus_transaccion
    id_categoria?: IntNullableFilter<"transaccion"> | number | null
    id_usuario?: IntNullableFilter<"transaccion"> | number | null
    id_perfil?: IntNullableFilter<"transaccion"> | number | null
    id_subcategoria?: IntNullableFilter<"transaccion"> | number | null
    id_persona?: IntNullableFilter<"transaccion"> | number | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, categoriaWhereInput> | null
    perfil?: XOR<PerfilNullableScalarRelationFilter, perfilWhereInput> | null
    persona?: XOR<PersonaNullableScalarRelationFilter, personaWhereInput> | null
    subcategoria?: XOR<SubcategoriaNullableScalarRelationFilter, subcategoriaWhereInput> | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, usuarioWhereInput> | null
    transaccion_cuota?: Transaccion_cuotaListRelationFilter
  }, "id_transaccion">

  export type transaccionOrderByWithAggregationInput = {
    id_transaccion?: SortOrder
    tipo?: SortOrder
    fecha_transaccion?: SortOrder
    nota?: SortOrderInput | SortOrder
    monto_total?: SortOrder
    plazos?: SortOrderInput | SortOrder
    estatus?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_perfil?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    id_persona?: SortOrderInput | SortOrder
    _count?: transaccionCountOrderByAggregateInput
    _avg?: transaccionAvgOrderByAggregateInput
    _max?: transaccionMaxOrderByAggregateInput
    _min?: transaccionMinOrderByAggregateInput
    _sum?: transaccionSumOrderByAggregateInput
  }

  export type transaccionScalarWhereWithAggregatesInput = {
    AND?: transaccionScalarWhereWithAggregatesInput | transaccionScalarWhereWithAggregatesInput[]
    OR?: transaccionScalarWhereWithAggregatesInput[]
    NOT?: transaccionScalarWhereWithAggregatesInput | transaccionScalarWhereWithAggregatesInput[]
    id_transaccion?: IntWithAggregatesFilter<"transaccion"> | number
    tipo?: Enumtipo_movimientoWithAggregatesFilter<"transaccion"> | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeWithAggregatesFilter<"transaccion"> | Date | string
    nota?: StringNullableWithAggregatesFilter<"transaccion"> | string | null
    monto_total?: DecimalWithAggregatesFilter<"transaccion"> | Decimal | DecimalJsLike | number | string
    plazos?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
    estatus?: Enumestatus_transaccionWithAggregatesFilter<"transaccion"> | $Enums.estatus_transaccion
    id_categoria?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
    id_usuario?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
    id_perfil?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
    id_subcategoria?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
    id_persona?: IntNullableWithAggregatesFilter<"transaccion"> | number | null
  }

  export type transaccion_cuotaWhereInput = {
    AND?: transaccion_cuotaWhereInput | transaccion_cuotaWhereInput[]
    OR?: transaccion_cuotaWhereInput[]
    NOT?: transaccion_cuotaWhereInput | transaccion_cuotaWhereInput[]
    id_cuota?: IntFilter<"transaccion_cuota"> | number
    id_transaccion?: IntNullableFilter<"transaccion_cuota"> | number | null
    monto?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    fecha_pago?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    estatus?: Enumestatus_transaccionFilter<"transaccion_cuota"> | $Enums.estatus_transaccion
    pagado?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    transaccion?: XOR<TransaccionNullableScalarRelationFilter, transaccionWhereInput> | null
  }

  export type transaccion_cuotaOrderByWithRelationInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrderInput | SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    estatus?: SortOrder
    pagado?: SortOrder
    transaccion?: transaccionOrderByWithRelationInput
  }

  export type transaccion_cuotaWhereUniqueInput = Prisma.AtLeast<{
    id_cuota?: number
    AND?: transaccion_cuotaWhereInput | transaccion_cuotaWhereInput[]
    OR?: transaccion_cuotaWhereInput[]
    NOT?: transaccion_cuotaWhereInput | transaccion_cuotaWhereInput[]
    id_transaccion?: IntNullableFilter<"transaccion_cuota"> | number | null
    monto?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    fecha_pago?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    estatus?: Enumestatus_transaccionFilter<"transaccion_cuota"> | $Enums.estatus_transaccion
    pagado?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    transaccion?: XOR<TransaccionNullableScalarRelationFilter, transaccionWhereInput> | null
  }, "id_cuota">

  export type transaccion_cuotaOrderByWithAggregationInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrderInput | SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    estatus?: SortOrder
    pagado?: SortOrder
    _count?: transaccion_cuotaCountOrderByAggregateInput
    _avg?: transaccion_cuotaAvgOrderByAggregateInput
    _max?: transaccion_cuotaMaxOrderByAggregateInput
    _min?: transaccion_cuotaMinOrderByAggregateInput
    _sum?: transaccion_cuotaSumOrderByAggregateInput
  }

  export type transaccion_cuotaScalarWhereWithAggregatesInput = {
    AND?: transaccion_cuotaScalarWhereWithAggregatesInput | transaccion_cuotaScalarWhereWithAggregatesInput[]
    OR?: transaccion_cuotaScalarWhereWithAggregatesInput[]
    NOT?: transaccion_cuotaScalarWhereWithAggregatesInput | transaccion_cuotaScalarWhereWithAggregatesInput[]
    id_cuota?: IntWithAggregatesFilter<"transaccion_cuota"> | number
    id_transaccion?: IntNullableWithAggregatesFilter<"transaccion_cuota"> | number | null
    monto?: DecimalWithAggregatesFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeNullableWithAggregatesFilter<"transaccion_cuota"> | Date | string | null
    fecha_pago?: DateTimeNullableWithAggregatesFilter<"transaccion_cuota"> | Date | string | null
    estatus?: Enumestatus_transaccionWithAggregatesFilter<"transaccion_cuota"> | $Enums.estatus_transaccion
    pagado?: DecimalWithAggregatesFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    apellido_paterno?: StringFilter<"usuario"> | string
    apellido_materno?: StringNullableFilter<"usuario"> | string | null
    correo?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    fecha_creacion?: DateTimeFilter<"usuario"> | Date | string
    foto_perfil?: StringNullableFilter<"usuario"> | string | null
    estatus?: EnumestatusFilter<"usuario"> | $Enums.estatus
    presupuesto?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    dia_corte?: IntNullableFilter<"usuario"> | number | null
    balance?: BalanceListRelationFilter
    categoria?: CategoriaListRelationFilter
    notificacion?: NotificacionListRelationFilter
    perfil?: PerfilListRelationFilter
    persona?: PersonaListRelationFilter
    subcategoria?: SubcategoriaListRelationFilter
    transaccion?: TransaccionListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    estatus?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrderInput | SortOrder
    balance?: balanceOrderByRelationAggregateInput
    categoria?: categoriaOrderByRelationAggregateInput
    notificacion?: notificacionOrderByRelationAggregateInput
    perfil?: perfilOrderByRelationAggregateInput
    persona?: personaOrderByRelationAggregateInput
    subcategoria?: subcategoriaOrderByRelationAggregateInput
    transaccion?: transaccionOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    apellido_paterno?: StringFilter<"usuario"> | string
    apellido_materno?: StringNullableFilter<"usuario"> | string | null
    contrasena?: StringFilter<"usuario"> | string
    fecha_creacion?: DateTimeFilter<"usuario"> | Date | string
    foto_perfil?: StringNullableFilter<"usuario"> | string | null
    estatus?: EnumestatusFilter<"usuario"> | $Enums.estatus
    presupuesto?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    dia_corte?: IntNullableFilter<"usuario"> | number | null
    balance?: BalanceListRelationFilter
    categoria?: CategoriaListRelationFilter
    notificacion?: NotificacionListRelationFilter
    perfil?: PerfilListRelationFilter
    persona?: PersonaListRelationFilter
    subcategoria?: SubcategoriaListRelationFilter
    transaccion?: TransaccionListRelationFilter
  }, "id_usuario" | "correo">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    estatus?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    apellido_paterno?: StringWithAggregatesFilter<"usuario"> | string
    apellido_materno?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    correo?: StringWithAggregatesFilter<"usuario"> | string
    contrasena?: StringWithAggregatesFilter<"usuario"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    foto_perfil?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    estatus?: EnumestatusWithAggregatesFilter<"usuario"> | $Enums.estatus
    presupuesto?: DecimalWithAggregatesFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalWithAggregatesFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalWithAggregatesFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalWithAggregatesFilter<"usuario"> | Decimal | DecimalJsLike | number | string
    dia_corte?: IntNullableWithAggregatesFilter<"usuario"> | number | null
  }

  export type verificacionWhereInput = {
    AND?: verificacionWhereInput | verificacionWhereInput[]
    OR?: verificacionWhereInput[]
    NOT?: verificacionWhereInput | verificacionWhereInput[]
    id_verificacon?: IntFilter<"verificacion"> | number
    nombre?: StringFilter<"verificacion"> | string
    correo?: StringFilter<"verificacion"> | string
    codigo?: IntFilter<"verificacion"> | number
    creado_en?: DateTimeFilter<"verificacion"> | Date | string
    expiracion?: DateTimeFilter<"verificacion"> | Date | string
  }

  export type verificacionOrderByWithRelationInput = {
    id_verificacon?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    codigo?: SortOrder
    creado_en?: SortOrder
    expiracion?: SortOrder
  }

  export type verificacionWhereUniqueInput = Prisma.AtLeast<{
    id_verificacon?: number
    AND?: verificacionWhereInput | verificacionWhereInput[]
    OR?: verificacionWhereInput[]
    NOT?: verificacionWhereInput | verificacionWhereInput[]
    nombre?: StringFilter<"verificacion"> | string
    correo?: StringFilter<"verificacion"> | string
    codigo?: IntFilter<"verificacion"> | number
    creado_en?: DateTimeFilter<"verificacion"> | Date | string
    expiracion?: DateTimeFilter<"verificacion"> | Date | string
  }, "id_verificacon">

  export type verificacionOrderByWithAggregationInput = {
    id_verificacon?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    codigo?: SortOrder
    creado_en?: SortOrder
    expiracion?: SortOrder
    _count?: verificacionCountOrderByAggregateInput
    _avg?: verificacionAvgOrderByAggregateInput
    _max?: verificacionMaxOrderByAggregateInput
    _min?: verificacionMinOrderByAggregateInput
    _sum?: verificacionSumOrderByAggregateInput
  }

  export type verificacionScalarWhereWithAggregatesInput = {
    AND?: verificacionScalarWhereWithAggregatesInput | verificacionScalarWhereWithAggregatesInput[]
    OR?: verificacionScalarWhereWithAggregatesInput[]
    NOT?: verificacionScalarWhereWithAggregatesInput | verificacionScalarWhereWithAggregatesInput[]
    id_verificacon?: IntWithAggregatesFilter<"verificacion"> | number
    nombre?: StringWithAggregatesFilter<"verificacion"> | string
    correo?: StringWithAggregatesFilter<"verificacion"> | string
    codigo?: IntWithAggregatesFilter<"verificacion"> | number
    creado_en?: DateTimeWithAggregatesFilter<"verificacion"> | Date | string
    expiracion?: DateTimeWithAggregatesFilter<"verificacion"> | Date | string
  }

  export type balanceCreateInput = {
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
    usuario?: usuarioCreateNestedOneWithoutBalanceInput
  }

  export type balanceUncheckedCreateInput = {
    id_balance?: number
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
    id_usuario?: number | null
  }

  export type balanceUpdateInput = {
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: usuarioUpdateOneWithoutBalanceNestedInput
  }

  export type balanceUncheckedUpdateInput = {
    id_balance?: IntFieldUpdateOperationsInput | number
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type balanceCreateManyInput = {
    id_balance?: number
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
    id_usuario?: number | null
  }

  export type balanceUpdateManyMutationInput = {
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type balanceUncheckedUpdateManyInput = {
    id_balance?: IntFieldUpdateOperationsInput | number
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriaCreateInput = {
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
    usuario?: usuarioCreateNestedOneWithoutCategoriaInput
    subcategoria?: subcategoriaCreateNestedManyWithoutCategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_usuario?: number | null
    mostrar_panel?: boolean
    icono?: number
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutCategoriaInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneWithoutCategoriaNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutCategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_usuario?: number | null
    mostrar_panel?: boolean
    icono?: number
  }

  export type categoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type notificacionCreateInput = {
    descripcion: string
    fecha_notificacion?: Date | string
    perfil?: perfilCreateNestedOneWithoutNotificacionInput
    usuario?: usuarioCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_usuario?: number | null
    id_perfil?: number | null
  }

  export type notificacionUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: perfilUpdateOneWithoutNotificacionNestedInput
    usuario?: usuarioUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionCreateManyInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_usuario?: number | null
    id_perfil?: number | null
  }

  export type notificacionUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionUncheckedUpdateManyInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type perfilCreateInput = {
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionCreateNestedManyWithoutPerfilInput
    usuario?: usuarioCreateNestedOneWithoutPerfilInput
    transaccion?: transaccionCreateNestedManyWithoutPerfilInput
  }

  export type perfilUncheckedCreateInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    id_usuario?: number | null
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPerfilInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type perfilUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUpdateManyWithoutPerfilNestedInput
    usuario?: usuarioUpdateOneWithoutPerfilNestedInput
    transaccion?: transaccionUpdateManyWithoutPerfilNestedInput
  }

  export type perfilUncheckedUpdateInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUncheckedUpdateManyWithoutPerfilNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type perfilCreateManyInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    id_usuario?: number | null
    pin?: string | null
    super_usuario?: boolean | null
  }

  export type perfilUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type perfilUncheckedUpdateManyInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type personaCreateInput = {
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    usuario?: usuarioCreateNestedOneWithoutPersonaInput
    transaccion?: transaccionCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateInput = {
    id_persona?: number
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    id_usuario?: number | null
    transaccion?: transaccionUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    usuario?: usuarioUpdateOneWithoutPersonaNestedInput
    transaccion?: transaccionUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion?: transaccionUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaCreateManyInput = {
    id_persona?: number
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    id_usuario?: number | null
  }

  export type personaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
  }

  export type personaUncheckedUpdateManyInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subcategoriaCreateInput = {
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    icono?: number
    categoria?: categoriaCreateNestedOneWithoutSubcategoriaInput
    usuario?: usuarioCreateNestedOneWithoutSubcategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaUncheckedCreateInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_categoria?: number | null
    mostrar_panel?: boolean | null
    id_usuario?: number | null
    icono?: number
    transaccion?: transaccionUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
    categoria?: categoriaUpdateOneWithoutSubcategoriaNestedInput
    usuario?: usuarioUpdateOneWithoutSubcategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    icono?: IntFieldUpdateOperationsInput | number
    transaccion?: transaccionUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaCreateManyInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_categoria?: number | null
    mostrar_panel?: boolean | null
    id_usuario?: number | null
    icono?: number
  }

  export type subcategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type subcategoriaUncheckedUpdateManyInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionCreateInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUpdateInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionCreateManyInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
  }

  export type transaccionUpdateManyMutationInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
  }

  export type transaccionUncheckedUpdateManyInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccion_cuotaCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
    transaccion?: transaccionCreateNestedOneWithoutTransaccion_cuotaInput
  }

  export type transaccion_cuotaUncheckedCreateInput = {
    id_cuota?: number
    id_transaccion?: number | null
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaccion?: transaccionUpdateOneWithoutTransaccion_cuotaNestedInput
  }

  export type transaccion_cuotaUncheckedUpdateInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    id_transaccion?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaCreateManyInput = {
    id_cuota?: number
    id_transaccion?: number | null
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUncheckedUpdateManyInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    id_transaccion?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuarioCreateInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type verificacionCreateInput = {
    nombre: string
    correo: string
    codigo: number
    creado_en?: Date | string
    expiracion: Date | string
  }

  export type verificacionUncheckedCreateInput = {
    id_verificacon?: number
    nombre: string
    correo: string
    codigo: number
    creado_en?: Date | string
    expiracion: Date | string
  }

  export type verificacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    expiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificacionUncheckedUpdateInput = {
    id_verificacon?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    expiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificacionCreateManyInput = {
    id_verificacon?: number
    nombre: string
    correo: string
    codigo: number
    creado_en?: Date | string
    expiracion: Date | string
  }

  export type verificacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    expiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verificacionUncheckedUpdateManyInput = {
    id_verificacon?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    codigo?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    expiracion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type balanceCountOrderByAggregateInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrder
  }

  export type balanceAvgOrderByAggregateInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrder
  }

  export type balanceMaxOrderByAggregateInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrder
  }

  export type balanceMinOrderByAggregateInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrder
  }

  export type balanceSumOrderByAggregateInput = {
    id_balance?: SortOrder
    total_ingreso?: SortOrder
    total_egreso?: SortOrder
    resultado_neto?: SortOrder
    presupuesto?: SortOrder
    ahorro_mensual?: SortOrder
    resultado_final?: SortOrder
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumtipo_movimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoFilter<$PrismaModel> | $Enums.tipo_movimiento
  }

  export type EnumestatusFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus | EnumestatusFieldRefInput<$PrismaModel>
    in?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    not?: NestedEnumestatusFilter<$PrismaModel> | $Enums.estatus
  }

  export type Enumflujo_efectivoFilter<$PrismaModel = never> = {
    equals?: $Enums.flujo_efectivo | Enumflujo_efectivoFieldRefInput<$PrismaModel>
    in?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumflujo_efectivoFilter<$PrismaModel> | $Enums.flujo_efectivo
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubcategoriaListRelationFilter = {
    every?: subcategoriaWhereInput
    some?: subcategoriaWhereInput
    none?: subcategoriaWhereInput
  }

  export type TransaccionListRelationFilter = {
    every?: transaccionWhereInput
    some?: transaccionWhereInput
    none?: transaccionWhereInput
  }

  export type subcategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_usuario?: SortOrder
    mostrar_panel?: SortOrder
    icono?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_usuario?: SortOrder
    mostrar_panel?: SortOrder
    icono?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_usuario?: SortOrder
    mostrar_panel?: SortOrder
    icono?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumtipo_movimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_movimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_movimientoFilter<$PrismaModel>
    _max?: NestedEnumtipo_movimientoFilter<$PrismaModel>
  }

  export type EnumestatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus | EnumestatusFieldRefInput<$PrismaModel>
    in?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    not?: NestedEnumestatusWithAggregatesFilter<$PrismaModel> | $Enums.estatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestatusFilter<$PrismaModel>
    _max?: NestedEnumestatusFilter<$PrismaModel>
  }

  export type Enumflujo_efectivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.flujo_efectivo | Enumflujo_efectivoFieldRefInput<$PrismaModel>
    in?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumflujo_efectivoWithAggregatesFilter<$PrismaModel> | $Enums.flujo_efectivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumflujo_efectivoFilter<$PrismaModel>
    _max?: NestedEnumflujo_efectivoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PerfilNullableScalarRelationFilter = {
    is?: perfilWhereInput | null
    isNot?: perfilWhereInput | null
  }

  export type notificacionCountOrderByAggregateInput = {
    id_notificacion?: SortOrder
    descripcion?: SortOrder
    fecha_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
  }

  export type notificacionAvgOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
  }

  export type notificacionMaxOrderByAggregateInput = {
    id_notificacion?: SortOrder
    descripcion?: SortOrder
    fecha_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
  }

  export type notificacionMinOrderByAggregateInput = {
    id_notificacion?: SortOrder
    descripcion?: SortOrder
    fecha_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
  }

  export type notificacionSumOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NotificacionListRelationFilter = {
    every?: notificacionWhereInput
    some?: notificacionWhereInput
    none?: notificacionWhereInput
  }

  export type notificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type perfilCountOrderByAggregateInput = {
    id_perfil?: SortOrder
    nombre?: SortOrder
    icono?: SortOrder
    fecha_creacion?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
    pin?: SortOrder
    super_usuario?: SortOrder
  }

  export type perfilAvgOrderByAggregateInput = {
    id_perfil?: SortOrder
    icono?: SortOrder
    id_usuario?: SortOrder
  }

  export type perfilMaxOrderByAggregateInput = {
    id_perfil?: SortOrder
    nombre?: SortOrder
    icono?: SortOrder
    fecha_creacion?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
    pin?: SortOrder
    super_usuario?: SortOrder
  }

  export type perfilMinOrderByAggregateInput = {
    id_perfil?: SortOrder
    nombre?: SortOrder
    icono?: SortOrder
    fecha_creacion?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
    pin?: SortOrder
    super_usuario?: SortOrder
  }

  export type perfilSumOrderByAggregateInput = {
    id_perfil?: SortOrder
    icono?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumtipo_personaFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_persona | Enumtipo_personaFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_personaFilter<$PrismaModel> | $Enums.tipo_persona
  }

  export type personaCountOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
  }

  export type personaAvgOrderByAggregateInput = {
    id_persona?: SortOrder
    id_usuario?: SortOrder
  }

  export type personaMaxOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
  }

  export type personaMinOrderByAggregateInput = {
    id_persona?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    id_usuario?: SortOrder
  }

  export type personaSumOrderByAggregateInput = {
    id_persona?: SortOrder
    id_usuario?: SortOrder
  }

  export type Enumtipo_personaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_persona | Enumtipo_personaFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_personaWithAggregatesFilter<$PrismaModel> | $Enums.tipo_persona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_personaFilter<$PrismaModel>
    _max?: NestedEnumtipo_personaFilter<$PrismaModel>
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: categoriaWhereInput | null
    isNot?: categoriaWhereInput | null
  }

  export type subcategoriaCountOrderByAggregateInput = {
    id_subcategoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_categoria?: SortOrder
    mostrar_panel?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type subcategoriaAvgOrderByAggregateInput = {
    id_subcategoria?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type subcategoriaMaxOrderByAggregateInput = {
    id_subcategoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_categoria?: SortOrder
    mostrar_panel?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type subcategoriaMinOrderByAggregateInput = {
    id_subcategoria?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    estatus?: SortOrder
    flujo?: SortOrder
    id_categoria?: SortOrder
    mostrar_panel?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type subcategoriaSumOrderByAggregateInput = {
    id_subcategoria?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    icono?: SortOrder
  }

  export type Enumestatus_transaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus_transaccion | Enumestatus_transaccionFieldRefInput<$PrismaModel>
    in?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumestatus_transaccionFilter<$PrismaModel> | $Enums.estatus_transaccion
  }

  export type PersonaNullableScalarRelationFilter = {
    is?: personaWhereInput | null
    isNot?: personaWhereInput | null
  }

  export type SubcategoriaNullableScalarRelationFilter = {
    is?: subcategoriaWhereInput | null
    isNot?: subcategoriaWhereInput | null
  }

  export type Transaccion_cuotaListRelationFilter = {
    every?: transaccion_cuotaWhereInput
    some?: transaccion_cuotaWhereInput
    none?: transaccion_cuotaWhereInput
  }

  export type transaccion_cuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaccionCountOrderByAggregateInput = {
    id_transaccion?: SortOrder
    tipo?: SortOrder
    fecha_transaccion?: SortOrder
    nota?: SortOrder
    monto_total?: SortOrder
    plazos?: SortOrder
    estatus?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
    id_subcategoria?: SortOrder
    id_persona?: SortOrder
  }

  export type transaccionAvgOrderByAggregateInput = {
    id_transaccion?: SortOrder
    monto_total?: SortOrder
    plazos?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
    id_subcategoria?: SortOrder
    id_persona?: SortOrder
  }

  export type transaccionMaxOrderByAggregateInput = {
    id_transaccion?: SortOrder
    tipo?: SortOrder
    fecha_transaccion?: SortOrder
    nota?: SortOrder
    monto_total?: SortOrder
    plazos?: SortOrder
    estatus?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
    id_subcategoria?: SortOrder
    id_persona?: SortOrder
  }

  export type transaccionMinOrderByAggregateInput = {
    id_transaccion?: SortOrder
    tipo?: SortOrder
    fecha_transaccion?: SortOrder
    nota?: SortOrder
    monto_total?: SortOrder
    plazos?: SortOrder
    estatus?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
    id_subcategoria?: SortOrder
    id_persona?: SortOrder
  }

  export type transaccionSumOrderByAggregateInput = {
    id_transaccion?: SortOrder
    monto_total?: SortOrder
    plazos?: SortOrder
    id_categoria?: SortOrder
    id_usuario?: SortOrder
    id_perfil?: SortOrder
    id_subcategoria?: SortOrder
    id_persona?: SortOrder
  }

  export type Enumestatus_transaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus_transaccion | Enumestatus_transaccionFieldRefInput<$PrismaModel>
    in?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumestatus_transaccionWithAggregatesFilter<$PrismaModel> | $Enums.estatus_transaccion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestatus_transaccionFilter<$PrismaModel>
    _max?: NestedEnumestatus_transaccionFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TransaccionNullableScalarRelationFilter = {
    is?: transaccionWhereInput | null
    isNot?: transaccionWhereInput | null
  }

  export type transaccion_cuotaCountOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    fecha_pago?: SortOrder
    estatus?: SortOrder
    pagado?: SortOrder
  }

  export type transaccion_cuotaAvgOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrder
    monto?: SortOrder
    pagado?: SortOrder
  }

  export type transaccion_cuotaMaxOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    fecha_pago?: SortOrder
    estatus?: SortOrder
    pagado?: SortOrder
  }

  export type transaccion_cuotaMinOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrder
    monto?: SortOrder
    fecha_vencimiento?: SortOrder
    fecha_pago?: SortOrder
    estatus?: SortOrder
    pagado?: SortOrder
  }

  export type transaccion_cuotaSumOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_transaccion?: SortOrder
    monto?: SortOrder
    pagado?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BalanceListRelationFilter = {
    every?: balanceWhereInput
    some?: balanceWhereInput
    none?: balanceWhereInput
  }

  export type CategoriaListRelationFilter = {
    every?: categoriaWhereInput
    some?: categoriaWhereInput
    none?: categoriaWhereInput
  }

  export type PerfilListRelationFilter = {
    every?: perfilWhereInput
    some?: perfilWhereInput
    none?: perfilWhereInput
  }

  export type PersonaListRelationFilter = {
    every?: personaWhereInput
    some?: personaWhereInput
    none?: personaWhereInput
  }

  export type balanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type perfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    foto_perfil?: SortOrder
    estatus?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    foto_perfil?: SortOrder
    estatus?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    fecha_creacion?: SortOrder
    foto_perfil?: SortOrder
    estatus?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    presupuesto?: SortOrder
    ingreso_minimo?: SortOrder
    egreso_maximo?: SortOrder
    ahorro_mensual?: SortOrder
    dia_corte?: SortOrder
  }

  export type verificacionCountOrderByAggregateInput = {
    id_verificacon?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    codigo?: SortOrder
    creado_en?: SortOrder
    expiracion?: SortOrder
  }

  export type verificacionAvgOrderByAggregateInput = {
    id_verificacon?: SortOrder
    codigo?: SortOrder
  }

  export type verificacionMaxOrderByAggregateInput = {
    id_verificacon?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    codigo?: SortOrder
    creado_en?: SortOrder
    expiracion?: SortOrder
  }

  export type verificacionMinOrderByAggregateInput = {
    id_verificacon?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    codigo?: SortOrder
    creado_en?: SortOrder
    expiracion?: SortOrder
  }

  export type verificacionSumOrderByAggregateInput = {
    id_verificacon?: SortOrder
    codigo?: SortOrder
  }

  export type usuarioCreateNestedOneWithoutBalanceInput = {
    create?: XOR<usuarioCreateWithoutBalanceInput, usuarioUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutBalanceInput
    connect?: usuarioWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usuarioUpdateOneWithoutBalanceNestedInput = {
    create?: XOR<usuarioCreateWithoutBalanceInput, usuarioUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutBalanceInput
    upsert?: usuarioUpsertWithoutBalanceInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutBalanceInput, usuarioUpdateWithoutBalanceInput>, usuarioUncheckedUpdateWithoutBalanceInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarioCreateNestedOneWithoutCategoriaInput = {
    create?: XOR<usuarioCreateWithoutCategoriaInput, usuarioUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCategoriaInput
    connect?: usuarioWhereUniqueInput
  }

  export type subcategoriaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput> | subcategoriaCreateWithoutCategoriaInput[] | subcategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutCategoriaInput | subcategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: subcategoriaCreateManyCategoriaInputEnvelope
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
  }

  export type transaccionCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput> | transaccionCreateWithoutCategoriaInput[] | transaccionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutCategoriaInput | transaccionCreateOrConnectWithoutCategoriaInput[]
    createMany?: transaccionCreateManyCategoriaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type subcategoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput> | subcategoriaCreateWithoutCategoriaInput[] | subcategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutCategoriaInput | subcategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: subcategoriaCreateManyCategoriaInputEnvelope
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
  }

  export type transaccionUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput> | transaccionCreateWithoutCategoriaInput[] | transaccionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutCategoriaInput | transaccionCreateOrConnectWithoutCategoriaInput[]
    createMany?: transaccionCreateManyCategoriaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumtipo_movimientoFieldUpdateOperationsInput = {
    set?: $Enums.tipo_movimiento
  }

  export type EnumestatusFieldUpdateOperationsInput = {
    set?: $Enums.estatus
  }

  export type Enumflujo_efectivoFieldUpdateOperationsInput = {
    set?: $Enums.flujo_efectivo
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuarioUpdateOneWithoutCategoriaNestedInput = {
    create?: XOR<usuarioCreateWithoutCategoriaInput, usuarioUncheckedCreateWithoutCategoriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCategoriaInput
    upsert?: usuarioUpsertWithoutCategoriaInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutCategoriaInput, usuarioUpdateWithoutCategoriaInput>, usuarioUncheckedUpdateWithoutCategoriaInput>
  }

  export type subcategoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput> | subcategoriaCreateWithoutCategoriaInput[] | subcategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutCategoriaInput | subcategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: subcategoriaUpsertWithWhereUniqueWithoutCategoriaInput | subcategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: subcategoriaCreateManyCategoriaInputEnvelope
    set?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    disconnect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    delete?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    update?: subcategoriaUpdateWithWhereUniqueWithoutCategoriaInput | subcategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: subcategoriaUpdateManyWithWhereWithoutCategoriaInput | subcategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
  }

  export type transaccionUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput> | transaccionCreateWithoutCategoriaInput[] | transaccionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutCategoriaInput | transaccionCreateOrConnectWithoutCategoriaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutCategoriaInput | transaccionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: transaccionCreateManyCategoriaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutCategoriaInput | transaccionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutCategoriaInput | transaccionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type subcategoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput> | subcategoriaCreateWithoutCategoriaInput[] | subcategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutCategoriaInput | subcategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: subcategoriaUpsertWithWhereUniqueWithoutCategoriaInput | subcategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: subcategoriaCreateManyCategoriaInputEnvelope
    set?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    disconnect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    delete?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    update?: subcategoriaUpdateWithWhereUniqueWithoutCategoriaInput | subcategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: subcategoriaUpdateManyWithWhereWithoutCategoriaInput | subcategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
  }

  export type transaccionUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput> | transaccionCreateWithoutCategoriaInput[] | transaccionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutCategoriaInput | transaccionCreateOrConnectWithoutCategoriaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutCategoriaInput | transaccionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: transaccionCreateManyCategoriaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutCategoriaInput | transaccionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutCategoriaInput | transaccionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type perfilCreateNestedOneWithoutNotificacionInput = {
    create?: XOR<perfilCreateWithoutNotificacionInput, perfilUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: perfilCreateOrConnectWithoutNotificacionInput
    connect?: perfilWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutNotificacionInput = {
    create?: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNotificacionInput
    connect?: usuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type perfilUpdateOneWithoutNotificacionNestedInput = {
    create?: XOR<perfilCreateWithoutNotificacionInput, perfilUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: perfilCreateOrConnectWithoutNotificacionInput
    upsert?: perfilUpsertWithoutNotificacionInput
    disconnect?: perfilWhereInput | boolean
    delete?: perfilWhereInput | boolean
    connect?: perfilWhereUniqueInput
    update?: XOR<XOR<perfilUpdateToOneWithWhereWithoutNotificacionInput, perfilUpdateWithoutNotificacionInput>, perfilUncheckedUpdateWithoutNotificacionInput>
  }

  export type usuarioUpdateOneWithoutNotificacionNestedInput = {
    create?: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutNotificacionInput
    upsert?: usuarioUpsertWithoutNotificacionInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutNotificacionInput, usuarioUpdateWithoutNotificacionInput>, usuarioUncheckedUpdateWithoutNotificacionInput>
  }

  export type notificacionCreateNestedManyWithoutPerfilInput = {
    create?: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput> | notificacionCreateWithoutPerfilInput[] | notificacionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPerfilInput | notificacionCreateOrConnectWithoutPerfilInput[]
    createMany?: notificacionCreateManyPerfilInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type usuarioCreateNestedOneWithoutPerfilInput = {
    create?: XOR<usuarioCreateWithoutPerfilInput, usuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPerfilInput
    connect?: usuarioWhereUniqueInput
  }

  export type transaccionCreateNestedManyWithoutPerfilInput = {
    create?: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput> | transaccionCreateWithoutPerfilInput[] | transaccionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPerfilInput | transaccionCreateOrConnectWithoutPerfilInput[]
    createMany?: transaccionCreateManyPerfilInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type notificacionUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput> | notificacionCreateWithoutPerfilInput[] | notificacionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPerfilInput | notificacionCreateOrConnectWithoutPerfilInput[]
    createMany?: notificacionCreateManyPerfilInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type transaccionUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput> | transaccionCreateWithoutPerfilInput[] | transaccionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPerfilInput | transaccionCreateOrConnectWithoutPerfilInput[]
    createMany?: transaccionCreateManyPerfilInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type notificacionUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput> | notificacionCreateWithoutPerfilInput[] | notificacionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPerfilInput | notificacionCreateOrConnectWithoutPerfilInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutPerfilInput | notificacionUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: notificacionCreateManyPerfilInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutPerfilInput | notificacionUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutPerfilInput | notificacionUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type usuarioUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<usuarioCreateWithoutPerfilInput, usuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPerfilInput
    upsert?: usuarioUpsertWithoutPerfilInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPerfilInput, usuarioUpdateWithoutPerfilInput>, usuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type transaccionUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput> | transaccionCreateWithoutPerfilInput[] | transaccionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPerfilInput | transaccionCreateOrConnectWithoutPerfilInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutPerfilInput | transaccionUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: transaccionCreateManyPerfilInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutPerfilInput | transaccionUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutPerfilInput | transaccionUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type notificacionUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput> | notificacionCreateWithoutPerfilInput[] | notificacionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutPerfilInput | notificacionCreateOrConnectWithoutPerfilInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutPerfilInput | notificacionUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: notificacionCreateManyPerfilInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutPerfilInput | notificacionUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutPerfilInput | notificacionUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type transaccionUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput> | transaccionCreateWithoutPerfilInput[] | transaccionUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPerfilInput | transaccionCreateOrConnectWithoutPerfilInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutPerfilInput | transaccionUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: transaccionCreateManyPerfilInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutPerfilInput | transaccionUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutPerfilInput | transaccionUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutPersonaInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput
    connect?: usuarioWhereUniqueInput
  }

  export type transaccionCreateNestedManyWithoutPersonaInput = {
    create?: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput> | transaccionCreateWithoutPersonaInput[] | transaccionUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPersonaInput | transaccionCreateOrConnectWithoutPersonaInput[]
    createMany?: transaccionCreateManyPersonaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type transaccionUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput> | transaccionCreateWithoutPersonaInput[] | transaccionUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPersonaInput | transaccionCreateOrConnectWithoutPersonaInput[]
    createMany?: transaccionCreateManyPersonaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type Enumtipo_personaFieldUpdateOperationsInput = {
    set?: $Enums.tipo_persona
  }

  export type usuarioUpdateOneWithoutPersonaNestedInput = {
    create?: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPersonaInput
    upsert?: usuarioUpsertWithoutPersonaInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPersonaInput, usuarioUpdateWithoutPersonaInput>, usuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type transaccionUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput> | transaccionCreateWithoutPersonaInput[] | transaccionUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPersonaInput | transaccionCreateOrConnectWithoutPersonaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutPersonaInput | transaccionUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: transaccionCreateManyPersonaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutPersonaInput | transaccionUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutPersonaInput | transaccionUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type transaccionUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput> | transaccionCreateWithoutPersonaInput[] | transaccionUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutPersonaInput | transaccionCreateOrConnectWithoutPersonaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutPersonaInput | transaccionUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: transaccionCreateManyPersonaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutPersonaInput | transaccionUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutPersonaInput | transaccionUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutSubcategoriaInput = {
    create?: XOR<categoriaCreateWithoutSubcategoriaInput, categoriaUncheckedCreateWithoutSubcategoriaInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutSubcategoriaInput
    connect?: categoriaWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutSubcategoriaInput = {
    create?: XOR<usuarioCreateWithoutSubcategoriaInput, usuarioUncheckedCreateWithoutSubcategoriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSubcategoriaInput
    connect?: usuarioWhereUniqueInput
  }

  export type transaccionCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput> | transaccionCreateWithoutSubcategoriaInput[] | transaccionUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutSubcategoriaInput | transaccionCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: transaccionCreateManySubcategoriaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type transaccionUncheckedCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput> | transaccionCreateWithoutSubcategoriaInput[] | transaccionUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutSubcategoriaInput | transaccionCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: transaccionCreateManySubcategoriaInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type categoriaUpdateOneWithoutSubcategoriaNestedInput = {
    create?: XOR<categoriaCreateWithoutSubcategoriaInput, categoriaUncheckedCreateWithoutSubcategoriaInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutSubcategoriaInput
    upsert?: categoriaUpsertWithoutSubcategoriaInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutSubcategoriaInput, categoriaUpdateWithoutSubcategoriaInput>, categoriaUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type usuarioUpdateOneWithoutSubcategoriaNestedInput = {
    create?: XOR<usuarioCreateWithoutSubcategoriaInput, usuarioUncheckedCreateWithoutSubcategoriaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSubcategoriaInput
    upsert?: usuarioUpsertWithoutSubcategoriaInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSubcategoriaInput, usuarioUpdateWithoutSubcategoriaInput>, usuarioUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type transaccionUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput> | transaccionCreateWithoutSubcategoriaInput[] | transaccionUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutSubcategoriaInput | transaccionCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutSubcategoriaInput | transaccionUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: transaccionCreateManySubcategoriaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutSubcategoriaInput | transaccionUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutSubcategoriaInput | transaccionUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type transaccionUncheckedUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput> | transaccionCreateWithoutSubcategoriaInput[] | transaccionUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutSubcategoriaInput | transaccionCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutSubcategoriaInput | transaccionUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: transaccionCreateManySubcategoriaInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutSubcategoriaInput | transaccionUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutSubcategoriaInput | transaccionUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutTransaccionInput = {
    create?: XOR<categoriaCreateWithoutTransaccionInput, categoriaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutTransaccionInput
    connect?: categoriaWhereUniqueInput
  }

  export type perfilCreateNestedOneWithoutTransaccionInput = {
    create?: XOR<perfilCreateWithoutTransaccionInput, perfilUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: perfilCreateOrConnectWithoutTransaccionInput
    connect?: perfilWhereUniqueInput
  }

  export type personaCreateNestedOneWithoutTransaccionInput = {
    create?: XOR<personaCreateWithoutTransaccionInput, personaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: personaCreateOrConnectWithoutTransaccionInput
    connect?: personaWhereUniqueInput
  }

  export type subcategoriaCreateNestedOneWithoutTransaccionInput = {
    create?: XOR<subcategoriaCreateWithoutTransaccionInput, subcategoriaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: subcategoriaCreateOrConnectWithoutTransaccionInput
    connect?: subcategoriaWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutTransaccionInput = {
    create?: XOR<usuarioCreateWithoutTransaccionInput, usuarioUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTransaccionInput
    connect?: usuarioWhereUniqueInput
  }

  export type transaccion_cuotaCreateNestedManyWithoutTransaccionInput = {
    create?: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput> | transaccion_cuotaCreateWithoutTransaccionInput[] | transaccion_cuotaUncheckedCreateWithoutTransaccionInput[]
    connectOrCreate?: transaccion_cuotaCreateOrConnectWithoutTransaccionInput | transaccion_cuotaCreateOrConnectWithoutTransaccionInput[]
    createMany?: transaccion_cuotaCreateManyTransaccionInputEnvelope
    connect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
  }

  export type transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput = {
    create?: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput> | transaccion_cuotaCreateWithoutTransaccionInput[] | transaccion_cuotaUncheckedCreateWithoutTransaccionInput[]
    connectOrCreate?: transaccion_cuotaCreateOrConnectWithoutTransaccionInput | transaccion_cuotaCreateOrConnectWithoutTransaccionInput[]
    createMany?: transaccion_cuotaCreateManyTransaccionInputEnvelope
    connect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
  }

  export type Enumestatus_transaccionFieldUpdateOperationsInput = {
    set?: $Enums.estatus_transaccion
  }

  export type categoriaUpdateOneWithoutTransaccionNestedInput = {
    create?: XOR<categoriaCreateWithoutTransaccionInput, categoriaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutTransaccionInput
    upsert?: categoriaUpsertWithoutTransaccionInput
    disconnect?: categoriaWhereInput | boolean
    delete?: categoriaWhereInput | boolean
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutTransaccionInput, categoriaUpdateWithoutTransaccionInput>, categoriaUncheckedUpdateWithoutTransaccionInput>
  }

  export type perfilUpdateOneWithoutTransaccionNestedInput = {
    create?: XOR<perfilCreateWithoutTransaccionInput, perfilUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: perfilCreateOrConnectWithoutTransaccionInput
    upsert?: perfilUpsertWithoutTransaccionInput
    disconnect?: perfilWhereInput | boolean
    delete?: perfilWhereInput | boolean
    connect?: perfilWhereUniqueInput
    update?: XOR<XOR<perfilUpdateToOneWithWhereWithoutTransaccionInput, perfilUpdateWithoutTransaccionInput>, perfilUncheckedUpdateWithoutTransaccionInput>
  }

  export type personaUpdateOneWithoutTransaccionNestedInput = {
    create?: XOR<personaCreateWithoutTransaccionInput, personaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: personaCreateOrConnectWithoutTransaccionInput
    upsert?: personaUpsertWithoutTransaccionInput
    disconnect?: personaWhereInput | boolean
    delete?: personaWhereInput | boolean
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutTransaccionInput, personaUpdateWithoutTransaccionInput>, personaUncheckedUpdateWithoutTransaccionInput>
  }

  export type subcategoriaUpdateOneWithoutTransaccionNestedInput = {
    create?: XOR<subcategoriaCreateWithoutTransaccionInput, subcategoriaUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: subcategoriaCreateOrConnectWithoutTransaccionInput
    upsert?: subcategoriaUpsertWithoutTransaccionInput
    disconnect?: subcategoriaWhereInput | boolean
    delete?: subcategoriaWhereInput | boolean
    connect?: subcategoriaWhereUniqueInput
    update?: XOR<XOR<subcategoriaUpdateToOneWithWhereWithoutTransaccionInput, subcategoriaUpdateWithoutTransaccionInput>, subcategoriaUncheckedUpdateWithoutTransaccionInput>
  }

  export type usuarioUpdateOneWithoutTransaccionNestedInput = {
    create?: XOR<usuarioCreateWithoutTransaccionInput, usuarioUncheckedCreateWithoutTransaccionInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutTransaccionInput
    upsert?: usuarioUpsertWithoutTransaccionInput
    disconnect?: usuarioWhereInput | boolean
    delete?: usuarioWhereInput | boolean
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutTransaccionInput, usuarioUpdateWithoutTransaccionInput>, usuarioUncheckedUpdateWithoutTransaccionInput>
  }

  export type transaccion_cuotaUpdateManyWithoutTransaccionNestedInput = {
    create?: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput> | transaccion_cuotaCreateWithoutTransaccionInput[] | transaccion_cuotaUncheckedCreateWithoutTransaccionInput[]
    connectOrCreate?: transaccion_cuotaCreateOrConnectWithoutTransaccionInput | transaccion_cuotaCreateOrConnectWithoutTransaccionInput[]
    upsert?: transaccion_cuotaUpsertWithWhereUniqueWithoutTransaccionInput | transaccion_cuotaUpsertWithWhereUniqueWithoutTransaccionInput[]
    createMany?: transaccion_cuotaCreateManyTransaccionInputEnvelope
    set?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    disconnect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    delete?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    connect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    update?: transaccion_cuotaUpdateWithWhereUniqueWithoutTransaccionInput | transaccion_cuotaUpdateWithWhereUniqueWithoutTransaccionInput[]
    updateMany?: transaccion_cuotaUpdateManyWithWhereWithoutTransaccionInput | transaccion_cuotaUpdateManyWithWhereWithoutTransaccionInput[]
    deleteMany?: transaccion_cuotaScalarWhereInput | transaccion_cuotaScalarWhereInput[]
  }

  export type transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput = {
    create?: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput> | transaccion_cuotaCreateWithoutTransaccionInput[] | transaccion_cuotaUncheckedCreateWithoutTransaccionInput[]
    connectOrCreate?: transaccion_cuotaCreateOrConnectWithoutTransaccionInput | transaccion_cuotaCreateOrConnectWithoutTransaccionInput[]
    upsert?: transaccion_cuotaUpsertWithWhereUniqueWithoutTransaccionInput | transaccion_cuotaUpsertWithWhereUniqueWithoutTransaccionInput[]
    createMany?: transaccion_cuotaCreateManyTransaccionInputEnvelope
    set?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    disconnect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    delete?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    connect?: transaccion_cuotaWhereUniqueInput | transaccion_cuotaWhereUniqueInput[]
    update?: transaccion_cuotaUpdateWithWhereUniqueWithoutTransaccionInput | transaccion_cuotaUpdateWithWhereUniqueWithoutTransaccionInput[]
    updateMany?: transaccion_cuotaUpdateManyWithWhereWithoutTransaccionInput | transaccion_cuotaUpdateManyWithWhereWithoutTransaccionInput[]
    deleteMany?: transaccion_cuotaScalarWhereInput | transaccion_cuotaScalarWhereInput[]
  }

  export type transaccionCreateNestedOneWithoutTransaccion_cuotaInput = {
    create?: XOR<transaccionCreateWithoutTransaccion_cuotaInput, transaccionUncheckedCreateWithoutTransaccion_cuotaInput>
    connectOrCreate?: transaccionCreateOrConnectWithoutTransaccion_cuotaInput
    connect?: transaccionWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type transaccionUpdateOneWithoutTransaccion_cuotaNestedInput = {
    create?: XOR<transaccionCreateWithoutTransaccion_cuotaInput, transaccionUncheckedCreateWithoutTransaccion_cuotaInput>
    connectOrCreate?: transaccionCreateOrConnectWithoutTransaccion_cuotaInput
    upsert?: transaccionUpsertWithoutTransaccion_cuotaInput
    disconnect?: transaccionWhereInput | boolean
    delete?: transaccionWhereInput | boolean
    connect?: transaccionWhereUniqueInput
    update?: XOR<XOR<transaccionUpdateToOneWithWhereWithoutTransaccion_cuotaInput, transaccionUpdateWithoutTransaccion_cuotaInput>, transaccionUncheckedUpdateWithoutTransaccion_cuotaInput>
  }

  export type balanceCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput> | balanceCreateWithoutUsuarioInput[] | balanceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUsuarioInput | balanceCreateOrConnectWithoutUsuarioInput[]
    createMany?: balanceCreateManyUsuarioInputEnvelope
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
  }

  export type categoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput> | categoriaCreateWithoutUsuarioInput[] | categoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuarioInput | categoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: categoriaCreateManyUsuarioInputEnvelope
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
  }

  export type notificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type perfilCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput> | perfilCreateWithoutUsuarioInput[] | perfilUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: perfilCreateOrConnectWithoutUsuarioInput | perfilCreateOrConnectWithoutUsuarioInput[]
    createMany?: perfilCreateManyUsuarioInputEnvelope
    connect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
  }

  export type personaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput> | personaCreateWithoutUsuarioInput[] | personaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput | personaCreateOrConnectWithoutUsuarioInput[]
    createMany?: personaCreateManyUsuarioInputEnvelope
    connect?: personaWhereUniqueInput | personaWhereUniqueInput[]
  }

  export type subcategoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput> | subcategoriaCreateWithoutUsuarioInput[] | subcategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutUsuarioInput | subcategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: subcategoriaCreateManyUsuarioInputEnvelope
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
  }

  export type transaccionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput> | transaccionCreateWithoutUsuarioInput[] | transaccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutUsuarioInput | transaccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: transaccionCreateManyUsuarioInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type balanceUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput> | balanceCreateWithoutUsuarioInput[] | balanceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUsuarioInput | balanceCreateOrConnectWithoutUsuarioInput[]
    createMany?: balanceCreateManyUsuarioInputEnvelope
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
  }

  export type categoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput> | categoriaCreateWithoutUsuarioInput[] | categoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuarioInput | categoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: categoriaCreateManyUsuarioInputEnvelope
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
  }

  export type notificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
  }

  export type perfilUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput> | perfilCreateWithoutUsuarioInput[] | perfilUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: perfilCreateOrConnectWithoutUsuarioInput | perfilCreateOrConnectWithoutUsuarioInput[]
    createMany?: perfilCreateManyUsuarioInputEnvelope
    connect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
  }

  export type personaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput> | personaCreateWithoutUsuarioInput[] | personaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput | personaCreateOrConnectWithoutUsuarioInput[]
    createMany?: personaCreateManyUsuarioInputEnvelope
    connect?: personaWhereUniqueInput | personaWhereUniqueInput[]
  }

  export type subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput> | subcategoriaCreateWithoutUsuarioInput[] | subcategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutUsuarioInput | subcategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: subcategoriaCreateManyUsuarioInputEnvelope
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
  }

  export type transaccionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput> | transaccionCreateWithoutUsuarioInput[] | transaccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutUsuarioInput | transaccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: transaccionCreateManyUsuarioInputEnvelope
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
  }

  export type balanceUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput> | balanceCreateWithoutUsuarioInput[] | balanceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUsuarioInput | balanceCreateOrConnectWithoutUsuarioInput[]
    upsert?: balanceUpsertWithWhereUniqueWithoutUsuarioInput | balanceUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: balanceCreateManyUsuarioInputEnvelope
    set?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    disconnect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    delete?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    update?: balanceUpdateWithWhereUniqueWithoutUsuarioInput | balanceUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: balanceUpdateManyWithWhereWithoutUsuarioInput | balanceUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: balanceScalarWhereInput | balanceScalarWhereInput[]
  }

  export type categoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput> | categoriaCreateWithoutUsuarioInput[] | categoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuarioInput | categoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: categoriaUpsertWithWhereUniqueWithoutUsuarioInput | categoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: categoriaCreateManyUsuarioInputEnvelope
    set?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    disconnect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    delete?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    update?: categoriaUpdateWithWhereUniqueWithoutUsuarioInput | categoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: categoriaUpdateManyWithWhereWithoutUsuarioInput | categoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
  }

  export type notificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutUsuarioInput | notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutUsuarioInput | notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutUsuarioInput | notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type perfilUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput> | perfilCreateWithoutUsuarioInput[] | perfilUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: perfilCreateOrConnectWithoutUsuarioInput | perfilCreateOrConnectWithoutUsuarioInput[]
    upsert?: perfilUpsertWithWhereUniqueWithoutUsuarioInput | perfilUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: perfilCreateManyUsuarioInputEnvelope
    set?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    disconnect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    delete?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    connect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    update?: perfilUpdateWithWhereUniqueWithoutUsuarioInput | perfilUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: perfilUpdateManyWithWhereWithoutUsuarioInput | perfilUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: perfilScalarWhereInput | perfilScalarWhereInput[]
  }

  export type personaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput> | personaCreateWithoutUsuarioInput[] | personaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput | personaCreateOrConnectWithoutUsuarioInput[]
    upsert?: personaUpsertWithWhereUniqueWithoutUsuarioInput | personaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: personaCreateManyUsuarioInputEnvelope
    set?: personaWhereUniqueInput | personaWhereUniqueInput[]
    disconnect?: personaWhereUniqueInput | personaWhereUniqueInput[]
    delete?: personaWhereUniqueInput | personaWhereUniqueInput[]
    connect?: personaWhereUniqueInput | personaWhereUniqueInput[]
    update?: personaUpdateWithWhereUniqueWithoutUsuarioInput | personaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: personaUpdateManyWithWhereWithoutUsuarioInput | personaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: personaScalarWhereInput | personaScalarWhereInput[]
  }

  export type subcategoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput> | subcategoriaCreateWithoutUsuarioInput[] | subcategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutUsuarioInput | subcategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: subcategoriaUpsertWithWhereUniqueWithoutUsuarioInput | subcategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: subcategoriaCreateManyUsuarioInputEnvelope
    set?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    disconnect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    delete?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    update?: subcategoriaUpdateWithWhereUniqueWithoutUsuarioInput | subcategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: subcategoriaUpdateManyWithWhereWithoutUsuarioInput | subcategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
  }

  export type transaccionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput> | transaccionCreateWithoutUsuarioInput[] | transaccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutUsuarioInput | transaccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutUsuarioInput | transaccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: transaccionCreateManyUsuarioInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutUsuarioInput | transaccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutUsuarioInput | transaccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type balanceUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput> | balanceCreateWithoutUsuarioInput[] | balanceUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUsuarioInput | balanceCreateOrConnectWithoutUsuarioInput[]
    upsert?: balanceUpsertWithWhereUniqueWithoutUsuarioInput | balanceUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: balanceCreateManyUsuarioInputEnvelope
    set?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    disconnect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    delete?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    update?: balanceUpdateWithWhereUniqueWithoutUsuarioInput | balanceUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: balanceUpdateManyWithWhereWithoutUsuarioInput | balanceUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: balanceScalarWhereInput | balanceScalarWhereInput[]
  }

  export type categoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput> | categoriaCreateWithoutUsuarioInput[] | categoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuarioInput | categoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: categoriaUpsertWithWhereUniqueWithoutUsuarioInput | categoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: categoriaCreateManyUsuarioInputEnvelope
    set?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    disconnect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    delete?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    update?: categoriaUpdateWithWhereUniqueWithoutUsuarioInput | categoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: categoriaUpdateManyWithWhereWithoutUsuarioInput | categoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
  }

  export type notificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput> | notificacionCreateWithoutUsuarioInput[] | notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: notificacionCreateOrConnectWithoutUsuarioInput | notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: notificacionUpsertWithWhereUniqueWithoutUsuarioInput | notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: notificacionCreateManyUsuarioInputEnvelope
    set?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    disconnect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    delete?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    connect?: notificacionWhereUniqueInput | notificacionWhereUniqueInput[]
    update?: notificacionUpdateWithWhereUniqueWithoutUsuarioInput | notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: notificacionUpdateManyWithWhereWithoutUsuarioInput | notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
  }

  export type perfilUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput> | perfilCreateWithoutUsuarioInput[] | perfilUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: perfilCreateOrConnectWithoutUsuarioInput | perfilCreateOrConnectWithoutUsuarioInput[]
    upsert?: perfilUpsertWithWhereUniqueWithoutUsuarioInput | perfilUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: perfilCreateManyUsuarioInputEnvelope
    set?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    disconnect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    delete?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    connect?: perfilWhereUniqueInput | perfilWhereUniqueInput[]
    update?: perfilUpdateWithWhereUniqueWithoutUsuarioInput | perfilUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: perfilUpdateManyWithWhereWithoutUsuarioInput | perfilUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: perfilScalarWhereInput | perfilScalarWhereInput[]
  }

  export type personaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput> | personaCreateWithoutUsuarioInput[] | personaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: personaCreateOrConnectWithoutUsuarioInput | personaCreateOrConnectWithoutUsuarioInput[]
    upsert?: personaUpsertWithWhereUniqueWithoutUsuarioInput | personaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: personaCreateManyUsuarioInputEnvelope
    set?: personaWhereUniqueInput | personaWhereUniqueInput[]
    disconnect?: personaWhereUniqueInput | personaWhereUniqueInput[]
    delete?: personaWhereUniqueInput | personaWhereUniqueInput[]
    connect?: personaWhereUniqueInput | personaWhereUniqueInput[]
    update?: personaUpdateWithWhereUniqueWithoutUsuarioInput | personaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: personaUpdateManyWithWhereWithoutUsuarioInput | personaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: personaScalarWhereInput | personaScalarWhereInput[]
  }

  export type subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput> | subcategoriaCreateWithoutUsuarioInput[] | subcategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: subcategoriaCreateOrConnectWithoutUsuarioInput | subcategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: subcategoriaUpsertWithWhereUniqueWithoutUsuarioInput | subcategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: subcategoriaCreateManyUsuarioInputEnvelope
    set?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    disconnect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    delete?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    connect?: subcategoriaWhereUniqueInput | subcategoriaWhereUniqueInput[]
    update?: subcategoriaUpdateWithWhereUniqueWithoutUsuarioInput | subcategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: subcategoriaUpdateManyWithWhereWithoutUsuarioInput | subcategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
  }

  export type transaccionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput> | transaccionCreateWithoutUsuarioInput[] | transaccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: transaccionCreateOrConnectWithoutUsuarioInput | transaccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: transaccionUpsertWithWhereUniqueWithoutUsuarioInput | transaccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: transaccionCreateManyUsuarioInputEnvelope
    set?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    disconnect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    delete?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    connect?: transaccionWhereUniqueInput | transaccionWhereUniqueInput[]
    update?: transaccionUpdateWithWhereUniqueWithoutUsuarioInput | transaccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: transaccionUpdateManyWithWhereWithoutUsuarioInput | transaccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumtipo_movimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoFilter<$PrismaModel> | $Enums.tipo_movimiento
  }

  export type NestedEnumestatusFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus | EnumestatusFieldRefInput<$PrismaModel>
    in?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    not?: NestedEnumestatusFilter<$PrismaModel> | $Enums.estatus
  }

  export type NestedEnumflujo_efectivoFilter<$PrismaModel = never> = {
    equals?: $Enums.flujo_efectivo | Enumflujo_efectivoFieldRefInput<$PrismaModel>
    in?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumflujo_efectivoFilter<$PrismaModel> | $Enums.flujo_efectivo
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_movimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_movimientoFilter<$PrismaModel>
    _max?: NestedEnumtipo_movimientoFilter<$PrismaModel>
  }

  export type NestedEnumestatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus | EnumestatusFieldRefInput<$PrismaModel>
    in?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus[] | ListEnumestatusFieldRefInput<$PrismaModel>
    not?: NestedEnumestatusWithAggregatesFilter<$PrismaModel> | $Enums.estatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestatusFilter<$PrismaModel>
    _max?: NestedEnumestatusFilter<$PrismaModel>
  }

  export type NestedEnumflujo_efectivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.flujo_efectivo | Enumflujo_efectivoFieldRefInput<$PrismaModel>
    in?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    notIn?: $Enums.flujo_efectivo[] | ListEnumflujo_efectivoFieldRefInput<$PrismaModel>
    not?: NestedEnumflujo_efectivoWithAggregatesFilter<$PrismaModel> | $Enums.flujo_efectivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumflujo_efectivoFilter<$PrismaModel>
    _max?: NestedEnumflujo_efectivoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumtipo_personaFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_persona | Enumtipo_personaFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_personaFilter<$PrismaModel> | $Enums.tipo_persona
  }

  export type NestedEnumtipo_personaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_persona | Enumtipo_personaFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_persona[] | ListEnumtipo_personaFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_personaWithAggregatesFilter<$PrismaModel> | $Enums.tipo_persona
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_personaFilter<$PrismaModel>
    _max?: NestedEnumtipo_personaFilter<$PrismaModel>
  }

  export type NestedEnumestatus_transaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus_transaccion | Enumestatus_transaccionFieldRefInput<$PrismaModel>
    in?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumestatus_transaccionFilter<$PrismaModel> | $Enums.estatus_transaccion
  }

  export type NestedEnumestatus_transaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estatus_transaccion | Enumestatus_transaccionFieldRefInput<$PrismaModel>
    in?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.estatus_transaccion[] | ListEnumestatus_transaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumestatus_transaccionWithAggregatesFilter<$PrismaModel> | $Enums.estatus_transaccion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestatus_transaccionFilter<$PrismaModel>
    _max?: NestedEnumestatus_transaccionFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usuarioCreateWithoutBalanceInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutBalanceInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutBalanceInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutBalanceInput, usuarioUncheckedCreateWithoutBalanceInput>
  }

  export type usuarioUpsertWithoutBalanceInput = {
    update: XOR<usuarioUpdateWithoutBalanceInput, usuarioUncheckedUpdateWithoutBalanceInput>
    create: XOR<usuarioCreateWithoutBalanceInput, usuarioUncheckedCreateWithoutBalanceInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutBalanceInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutBalanceInput, usuarioUncheckedUpdateWithoutBalanceInput>
  }

  export type usuarioUpdateWithoutBalanceInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutBalanceInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateWithoutCategoriaInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCategoriaInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCategoriaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCategoriaInput, usuarioUncheckedCreateWithoutCategoriaInput>
  }

  export type subcategoriaCreateWithoutCategoriaInput = {
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    icono?: number
    usuario?: usuarioCreateNestedOneWithoutSubcategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaUncheckedCreateWithoutCategoriaInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    id_usuario?: number | null
    icono?: number
    transaccion?: transaccionUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaCreateOrConnectWithoutCategoriaInput = {
    where: subcategoriaWhereUniqueInput
    create: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type subcategoriaCreateManyCategoriaInputEnvelope = {
    data: subcategoriaCreateManyCategoriaInput | subcategoriaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type transaccionCreateWithoutCategoriaInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutCategoriaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionCreateOrConnectWithoutCategoriaInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput>
  }

  export type transaccionCreateManyCategoriaInputEnvelope = {
    data: transaccionCreateManyCategoriaInput | transaccionCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutCategoriaInput = {
    update: XOR<usuarioUpdateWithoutCategoriaInput, usuarioUncheckedUpdateWithoutCategoriaInput>
    create: XOR<usuarioCreateWithoutCategoriaInput, usuarioUncheckedCreateWithoutCategoriaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutCategoriaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutCategoriaInput, usuarioUncheckedUpdateWithoutCategoriaInput>
  }

  export type usuarioUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCategoriaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type subcategoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: subcategoriaWhereUniqueInput
    update: XOR<subcategoriaUpdateWithoutCategoriaInput, subcategoriaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<subcategoriaCreateWithoutCategoriaInput, subcategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type subcategoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: subcategoriaWhereUniqueInput
    data: XOR<subcategoriaUpdateWithoutCategoriaInput, subcategoriaUncheckedUpdateWithoutCategoriaInput>
  }

  export type subcategoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: subcategoriaScalarWhereInput
    data: XOR<subcategoriaUpdateManyMutationInput, subcategoriaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type subcategoriaScalarWhereInput = {
    AND?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
    OR?: subcategoriaScalarWhereInput[]
    NOT?: subcategoriaScalarWhereInput | subcategoriaScalarWhereInput[]
    id_subcategoria?: IntFilter<"subcategoria"> | number
    nombre?: StringFilter<"subcategoria"> | string
    tipo?: Enumtipo_movimientoFilter<"subcategoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"subcategoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"subcategoria"> | $Enums.flujo_efectivo
    id_categoria?: IntNullableFilter<"subcategoria"> | number | null
    mostrar_panel?: BoolNullableFilter<"subcategoria"> | boolean | null
    id_usuario?: IntNullableFilter<"subcategoria"> | number | null
    icono?: IntFilter<"subcategoria"> | number
  }

  export type transaccionUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: transaccionWhereUniqueInput
    update: XOR<transaccionUpdateWithoutCategoriaInput, transaccionUncheckedUpdateWithoutCategoriaInput>
    create: XOR<transaccionCreateWithoutCategoriaInput, transaccionUncheckedCreateWithoutCategoriaInput>
  }

  export type transaccionUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: transaccionWhereUniqueInput
    data: XOR<transaccionUpdateWithoutCategoriaInput, transaccionUncheckedUpdateWithoutCategoriaInput>
  }

  export type transaccionUpdateManyWithWhereWithoutCategoriaInput = {
    where: transaccionScalarWhereInput
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type transaccionScalarWhereInput = {
    AND?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
    OR?: transaccionScalarWhereInput[]
    NOT?: transaccionScalarWhereInput | transaccionScalarWhereInput[]
    id_transaccion?: IntFilter<"transaccion"> | number
    tipo?: Enumtipo_movimientoFilter<"transaccion"> | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFilter<"transaccion"> | Date | string
    nota?: StringNullableFilter<"transaccion"> | string | null
    monto_total?: DecimalFilter<"transaccion"> | Decimal | DecimalJsLike | number | string
    plazos?: IntNullableFilter<"transaccion"> | number | null
    estatus?: Enumestatus_transaccionFilter<"transaccion"> | $Enums.estatus_transaccion
    id_categoria?: IntNullableFilter<"transaccion"> | number | null
    id_usuario?: IntNullableFilter<"transaccion"> | number | null
    id_perfil?: IntNullableFilter<"transaccion"> | number | null
    id_subcategoria?: IntNullableFilter<"transaccion"> | number | null
    id_persona?: IntNullableFilter<"transaccion"> | number | null
  }

  export type perfilCreateWithoutNotificacionInput = {
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
    usuario?: usuarioCreateNestedOneWithoutPerfilInput
    transaccion?: transaccionCreateNestedManyWithoutPerfilInput
  }

  export type perfilUncheckedCreateWithoutNotificacionInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    id_usuario?: number | null
    pin?: string | null
    super_usuario?: boolean | null
    transaccion?: transaccionUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type perfilCreateOrConnectWithoutNotificacionInput = {
    where: perfilWhereUniqueInput
    create: XOR<perfilCreateWithoutNotificacionInput, perfilUncheckedCreateWithoutNotificacionInput>
  }

  export type usuarioCreateWithoutNotificacionInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutNotificacionInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutNotificacionInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
  }

  export type perfilUpsertWithoutNotificacionInput = {
    update: XOR<perfilUpdateWithoutNotificacionInput, perfilUncheckedUpdateWithoutNotificacionInput>
    create: XOR<perfilCreateWithoutNotificacionInput, perfilUncheckedCreateWithoutNotificacionInput>
    where?: perfilWhereInput
  }

  export type perfilUpdateToOneWithWhereWithoutNotificacionInput = {
    where?: perfilWhereInput
    data: XOR<perfilUpdateWithoutNotificacionInput, perfilUncheckedUpdateWithoutNotificacionInput>
  }

  export type perfilUpdateWithoutNotificacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: usuarioUpdateOneWithoutPerfilNestedInput
    transaccion?: transaccionUpdateManyWithoutPerfilNestedInput
  }

  export type perfilUncheckedUpdateWithoutNotificacionInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    transaccion?: transaccionUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type usuarioUpsertWithoutNotificacionInput = {
    update: XOR<usuarioUpdateWithoutNotificacionInput, usuarioUncheckedUpdateWithoutNotificacionInput>
    create: XOR<usuarioCreateWithoutNotificacionInput, usuarioUncheckedCreateWithoutNotificacionInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutNotificacionInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutNotificacionInput, usuarioUncheckedUpdateWithoutNotificacionInput>
  }

  export type usuarioUpdateWithoutNotificacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutNotificacionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type notificacionCreateWithoutPerfilInput = {
    descripcion: string
    fecha_notificacion?: Date | string
    usuario?: usuarioCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateWithoutPerfilInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_usuario?: number | null
  }

  export type notificacionCreateOrConnectWithoutPerfilInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput>
  }

  export type notificacionCreateManyPerfilInputEnvelope = {
    data: notificacionCreateManyPerfilInput | notificacionCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type usuarioCreateWithoutPerfilInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPerfilInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPerfilInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPerfilInput, usuarioUncheckedCreateWithoutPerfilInput>
  }

  export type transaccionCreateWithoutPerfilInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutPerfilInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionCreateOrConnectWithoutPerfilInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput>
  }

  export type transaccionCreateManyPerfilInputEnvelope = {
    data: transaccionCreateManyPerfilInput | transaccionCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type notificacionUpsertWithWhereUniqueWithoutPerfilInput = {
    where: notificacionWhereUniqueInput
    update: XOR<notificacionUpdateWithoutPerfilInput, notificacionUncheckedUpdateWithoutPerfilInput>
    create: XOR<notificacionCreateWithoutPerfilInput, notificacionUncheckedCreateWithoutPerfilInput>
  }

  export type notificacionUpdateWithWhereUniqueWithoutPerfilInput = {
    where: notificacionWhereUniqueInput
    data: XOR<notificacionUpdateWithoutPerfilInput, notificacionUncheckedUpdateWithoutPerfilInput>
  }

  export type notificacionUpdateManyWithWhereWithoutPerfilInput = {
    where: notificacionScalarWhereInput
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyWithoutPerfilInput>
  }

  export type notificacionScalarWhereInput = {
    AND?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    OR?: notificacionScalarWhereInput[]
    NOT?: notificacionScalarWhereInput | notificacionScalarWhereInput[]
    id_notificacion?: IntFilter<"notificacion"> | number
    descripcion?: StringFilter<"notificacion"> | string
    fecha_notificacion?: DateTimeFilter<"notificacion"> | Date | string
    id_usuario?: IntNullableFilter<"notificacion"> | number | null
    id_perfil?: IntNullableFilter<"notificacion"> | number | null
  }

  export type usuarioUpsertWithoutPerfilInput = {
    update: XOR<usuarioUpdateWithoutPerfilInput, usuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<usuarioCreateWithoutPerfilInput, usuarioUncheckedCreateWithoutPerfilInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPerfilInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPerfilInput, usuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type usuarioUpdateWithoutPerfilInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPerfilInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type transaccionUpsertWithWhereUniqueWithoutPerfilInput = {
    where: transaccionWhereUniqueInput
    update: XOR<transaccionUpdateWithoutPerfilInput, transaccionUncheckedUpdateWithoutPerfilInput>
    create: XOR<transaccionCreateWithoutPerfilInput, transaccionUncheckedCreateWithoutPerfilInput>
  }

  export type transaccionUpdateWithWhereUniqueWithoutPerfilInput = {
    where: transaccionWhereUniqueInput
    data: XOR<transaccionUpdateWithoutPerfilInput, transaccionUncheckedUpdateWithoutPerfilInput>
  }

  export type transaccionUpdateManyWithWhereWithoutPerfilInput = {
    where: transaccionScalarWhereInput
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyWithoutPerfilInput>
  }

  export type usuarioCreateWithoutPersonaInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPersonaInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPersonaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
  }

  export type transaccionCreateWithoutPersonaInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutPersonaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionCreateOrConnectWithoutPersonaInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput>
  }

  export type transaccionCreateManyPersonaInputEnvelope = {
    data: transaccionCreateManyPersonaInput | transaccionCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutPersonaInput = {
    update: XOR<usuarioUpdateWithoutPersonaInput, usuarioUncheckedUpdateWithoutPersonaInput>
    create: XOR<usuarioCreateWithoutPersonaInput, usuarioUncheckedCreateWithoutPersonaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPersonaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPersonaInput, usuarioUncheckedUpdateWithoutPersonaInput>
  }

  export type usuarioUpdateWithoutPersonaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPersonaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type transaccionUpsertWithWhereUniqueWithoutPersonaInput = {
    where: transaccionWhereUniqueInput
    update: XOR<transaccionUpdateWithoutPersonaInput, transaccionUncheckedUpdateWithoutPersonaInput>
    create: XOR<transaccionCreateWithoutPersonaInput, transaccionUncheckedCreateWithoutPersonaInput>
  }

  export type transaccionUpdateWithWhereUniqueWithoutPersonaInput = {
    where: transaccionWhereUniqueInput
    data: XOR<transaccionUpdateWithoutPersonaInput, transaccionUncheckedUpdateWithoutPersonaInput>
  }

  export type transaccionUpdateManyWithWhereWithoutPersonaInput = {
    where: transaccionScalarWhereInput
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyWithoutPersonaInput>
  }

  export type categoriaCreateWithoutSubcategoriaInput = {
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
    usuario?: usuarioCreateNestedOneWithoutCategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutSubcategoriaInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_usuario?: number | null
    mostrar_panel?: boolean
    icono?: number
    transaccion?: transaccionUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutSubcategoriaInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutSubcategoriaInput, categoriaUncheckedCreateWithoutSubcategoriaInput>
  }

  export type usuarioCreateWithoutSubcategoriaInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutSubcategoriaInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutSubcategoriaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSubcategoriaInput, usuarioUncheckedCreateWithoutSubcategoriaInput>
  }

  export type transaccionCreateWithoutSubcategoriaInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutSubcategoriaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_persona?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionCreateOrConnectWithoutSubcategoriaInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput>
  }

  export type transaccionCreateManySubcategoriaInputEnvelope = {
    data: transaccionCreateManySubcategoriaInput | transaccionCreateManySubcategoriaInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutSubcategoriaInput = {
    update: XOR<categoriaUpdateWithoutSubcategoriaInput, categoriaUncheckedUpdateWithoutSubcategoriaInput>
    create: XOR<categoriaCreateWithoutSubcategoriaInput, categoriaUncheckedCreateWithoutSubcategoriaInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutSubcategoriaInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutSubcategoriaInput, categoriaUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type categoriaUpdateWithoutSubcategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneWithoutCategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutSubcategoriaInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    transaccion?: transaccionUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type usuarioUpsertWithoutSubcategoriaInput = {
    update: XOR<usuarioUpdateWithoutSubcategoriaInput, usuarioUncheckedUpdateWithoutSubcategoriaInput>
    create: XOR<usuarioCreateWithoutSubcategoriaInput, usuarioUncheckedCreateWithoutSubcategoriaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSubcategoriaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSubcategoriaInput, usuarioUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type usuarioUpdateWithoutSubcategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSubcategoriaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type transaccionUpsertWithWhereUniqueWithoutSubcategoriaInput = {
    where: transaccionWhereUniqueInput
    update: XOR<transaccionUpdateWithoutSubcategoriaInput, transaccionUncheckedUpdateWithoutSubcategoriaInput>
    create: XOR<transaccionCreateWithoutSubcategoriaInput, transaccionUncheckedCreateWithoutSubcategoriaInput>
  }

  export type transaccionUpdateWithWhereUniqueWithoutSubcategoriaInput = {
    where: transaccionWhereUniqueInput
    data: XOR<transaccionUpdateWithoutSubcategoriaInput, transaccionUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type transaccionUpdateManyWithWhereWithoutSubcategoriaInput = {
    where: transaccionScalarWhereInput
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyWithoutSubcategoriaInput>
  }

  export type categoriaCreateWithoutTransaccionInput = {
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
    usuario?: usuarioCreateNestedOneWithoutCategoriaInput
    subcategoria?: subcategoriaCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutTransaccionInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_usuario?: number | null
    mostrar_panel?: boolean
    icono?: number
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutTransaccionInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutTransaccionInput, categoriaUncheckedCreateWithoutTransaccionInput>
  }

  export type perfilCreateWithoutTransaccionInput = {
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionCreateNestedManyWithoutPerfilInput
    usuario?: usuarioCreateNestedOneWithoutPerfilInput
  }

  export type perfilUncheckedCreateWithoutTransaccionInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    id_usuario?: number | null
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type perfilCreateOrConnectWithoutTransaccionInput = {
    where: perfilWhereUniqueInput
    create: XOR<perfilCreateWithoutTransaccionInput, perfilUncheckedCreateWithoutTransaccionInput>
  }

  export type personaCreateWithoutTransaccionInput = {
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    usuario?: usuarioCreateNestedOneWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutTransaccionInput = {
    id_persona?: number
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    id_usuario?: number | null
  }

  export type personaCreateOrConnectWithoutTransaccionInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutTransaccionInput, personaUncheckedCreateWithoutTransaccionInput>
  }

  export type subcategoriaCreateWithoutTransaccionInput = {
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    icono?: number
    categoria?: categoriaCreateNestedOneWithoutSubcategoriaInput
    usuario?: usuarioCreateNestedOneWithoutSubcategoriaInput
  }

  export type subcategoriaUncheckedCreateWithoutTransaccionInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_categoria?: number | null
    mostrar_panel?: boolean | null
    id_usuario?: number | null
    icono?: number
  }

  export type subcategoriaCreateOrConnectWithoutTransaccionInput = {
    where: subcategoriaWhereUniqueInput
    create: XOR<subcategoriaCreateWithoutTransaccionInput, subcategoriaUncheckedCreateWithoutTransaccionInput>
  }

  export type usuarioCreateWithoutTransaccionInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionCreateNestedManyWithoutUsuarioInput
    perfil?: perfilCreateNestedManyWithoutUsuarioInput
    persona?: personaCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutTransaccionInput = {
    id_usuario?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    correo: string
    contrasena: string
    fecha_creacion?: Date | string
    foto_perfil?: string | null
    estatus?: $Enums.estatus
    presupuesto?: Decimal | DecimalJsLike | number | string
    ingreso_minimo?: Decimal | DecimalJsLike | number | string
    egreso_maximo?: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    dia_corte?: number | null
    balance?: balanceUncheckedCreateNestedManyWithoutUsuarioInput
    categoria?: categoriaUncheckedCreateNestedManyWithoutUsuarioInput
    notificacion?: notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    perfil?: perfilUncheckedCreateNestedManyWithoutUsuarioInput
    persona?: personaUncheckedCreateNestedManyWithoutUsuarioInput
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutTransaccionInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutTransaccionInput, usuarioUncheckedCreateWithoutTransaccionInput>
  }

  export type transaccion_cuotaCreateWithoutTransaccionInput = {
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUncheckedCreateWithoutTransaccionInput = {
    id_cuota?: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaCreateOrConnectWithoutTransaccionInput = {
    where: transaccion_cuotaWhereUniqueInput
    create: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput>
  }

  export type transaccion_cuotaCreateManyTransaccionInputEnvelope = {
    data: transaccion_cuotaCreateManyTransaccionInput | transaccion_cuotaCreateManyTransaccionInput[]
    skipDuplicates?: boolean
  }

  export type categoriaUpsertWithoutTransaccionInput = {
    update: XOR<categoriaUpdateWithoutTransaccionInput, categoriaUncheckedUpdateWithoutTransaccionInput>
    create: XOR<categoriaCreateWithoutTransaccionInput, categoriaUncheckedCreateWithoutTransaccionInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutTransaccionInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutTransaccionInput, categoriaUncheckedUpdateWithoutTransaccionInput>
  }

  export type categoriaUpdateWithoutTransaccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneWithoutCategoriaNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutTransaccionInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type perfilUpsertWithoutTransaccionInput = {
    update: XOR<perfilUpdateWithoutTransaccionInput, perfilUncheckedUpdateWithoutTransaccionInput>
    create: XOR<perfilCreateWithoutTransaccionInput, perfilUncheckedCreateWithoutTransaccionInput>
    where?: perfilWhereInput
  }

  export type perfilUpdateToOneWithWhereWithoutTransaccionInput = {
    where?: perfilWhereInput
    data: XOR<perfilUpdateWithoutTransaccionInput, perfilUncheckedUpdateWithoutTransaccionInput>
  }

  export type perfilUpdateWithoutTransaccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUpdateManyWithoutPerfilNestedInput
    usuario?: usuarioUpdateOneWithoutPerfilNestedInput
  }

  export type perfilUncheckedUpdateWithoutTransaccionInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type personaUpsertWithoutTransaccionInput = {
    update: XOR<personaUpdateWithoutTransaccionInput, personaUncheckedUpdateWithoutTransaccionInput>
    create: XOR<personaCreateWithoutTransaccionInput, personaUncheckedCreateWithoutTransaccionInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutTransaccionInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutTransaccionInput, personaUncheckedUpdateWithoutTransaccionInput>
  }

  export type personaUpdateWithoutTransaccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    usuario?: usuarioUpdateOneWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutTransaccionInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subcategoriaUpsertWithoutTransaccionInput = {
    update: XOR<subcategoriaUpdateWithoutTransaccionInput, subcategoriaUncheckedUpdateWithoutTransaccionInput>
    create: XOR<subcategoriaCreateWithoutTransaccionInput, subcategoriaUncheckedCreateWithoutTransaccionInput>
    where?: subcategoriaWhereInput
  }

  export type subcategoriaUpdateToOneWithWhereWithoutTransaccionInput = {
    where?: subcategoriaWhereInput
    data: XOR<subcategoriaUpdateWithoutTransaccionInput, subcategoriaUncheckedUpdateWithoutTransaccionInput>
  }

  export type subcategoriaUpdateWithoutTransaccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
    categoria?: categoriaUpdateOneWithoutSubcategoriaNestedInput
    usuario?: usuarioUpdateOneWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateWithoutTransaccionInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioUpsertWithoutTransaccionInput = {
    update: XOR<usuarioUpdateWithoutTransaccionInput, usuarioUncheckedUpdateWithoutTransaccionInput>
    create: XOR<usuarioCreateWithoutTransaccionInput, usuarioUncheckedCreateWithoutTransaccionInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutTransaccionInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutTransaccionInput, usuarioUncheckedUpdateWithoutTransaccionInput>
  }

  export type usuarioUpdateWithoutTransaccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUpdateManyWithoutUsuarioNestedInput
    persona?: personaUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutTransaccionInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingreso_minimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    egreso_maximo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dia_corte?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: balanceUncheckedUpdateManyWithoutUsuarioNestedInput
    categoria?: categoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacion?: notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    perfil?: perfilUncheckedUpdateManyWithoutUsuarioNestedInput
    persona?: personaUncheckedUpdateManyWithoutUsuarioNestedInput
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type transaccion_cuotaUpsertWithWhereUniqueWithoutTransaccionInput = {
    where: transaccion_cuotaWhereUniqueInput
    update: XOR<transaccion_cuotaUpdateWithoutTransaccionInput, transaccion_cuotaUncheckedUpdateWithoutTransaccionInput>
    create: XOR<transaccion_cuotaCreateWithoutTransaccionInput, transaccion_cuotaUncheckedCreateWithoutTransaccionInput>
  }

  export type transaccion_cuotaUpdateWithWhereUniqueWithoutTransaccionInput = {
    where: transaccion_cuotaWhereUniqueInput
    data: XOR<transaccion_cuotaUpdateWithoutTransaccionInput, transaccion_cuotaUncheckedUpdateWithoutTransaccionInput>
  }

  export type transaccion_cuotaUpdateManyWithWhereWithoutTransaccionInput = {
    where: transaccion_cuotaScalarWhereInput
    data: XOR<transaccion_cuotaUpdateManyMutationInput, transaccion_cuotaUncheckedUpdateManyWithoutTransaccionInput>
  }

  export type transaccion_cuotaScalarWhereInput = {
    AND?: transaccion_cuotaScalarWhereInput | transaccion_cuotaScalarWhereInput[]
    OR?: transaccion_cuotaScalarWhereInput[]
    NOT?: transaccion_cuotaScalarWhereInput | transaccion_cuotaScalarWhereInput[]
    id_cuota?: IntFilter<"transaccion_cuota"> | number
    id_transaccion?: IntNullableFilter<"transaccion_cuota"> | number | null
    monto?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    fecha_pago?: DateTimeNullableFilter<"transaccion_cuota"> | Date | string | null
    estatus?: Enumestatus_transaccionFilter<"transaccion_cuota"> | $Enums.estatus_transaccion
    pagado?: DecimalFilter<"transaccion_cuota"> | Decimal | DecimalJsLike | number | string
  }

  export type transaccionCreateWithoutTransaccion_cuotaInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    usuario?: usuarioCreateNestedOneWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutTransaccion_cuotaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
  }

  export type transaccionCreateOrConnectWithoutTransaccion_cuotaInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutTransaccion_cuotaInput, transaccionUncheckedCreateWithoutTransaccion_cuotaInput>
  }

  export type transaccionUpsertWithoutTransaccion_cuotaInput = {
    update: XOR<transaccionUpdateWithoutTransaccion_cuotaInput, transaccionUncheckedUpdateWithoutTransaccion_cuotaInput>
    create: XOR<transaccionCreateWithoutTransaccion_cuotaInput, transaccionUncheckedCreateWithoutTransaccion_cuotaInput>
    where?: transaccionWhereInput
  }

  export type transaccionUpdateToOneWithWhereWithoutTransaccion_cuotaInput = {
    where?: transaccionWhereInput
    data: XOR<transaccionUpdateWithoutTransaccion_cuotaInput, transaccionUncheckedUpdateWithoutTransaccion_cuotaInput>
  }

  export type transaccionUpdateWithoutTransaccion_cuotaInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutTransaccion_cuotaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type balanceCreateWithoutUsuarioInput = {
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
  }

  export type balanceUncheckedCreateWithoutUsuarioInput = {
    id_balance?: number
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
  }

  export type balanceCreateOrConnectWithoutUsuarioInput = {
    where: balanceWhereUniqueInput
    create: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput>
  }

  export type balanceCreateManyUsuarioInputEnvelope = {
    data: balanceCreateManyUsuarioInput | balanceCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type categoriaCreateWithoutUsuarioInput = {
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
    subcategoria?: subcategoriaCreateNestedManyWithoutCategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutUsuarioInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
    subcategoria?: subcategoriaUncheckedCreateNestedManyWithoutCategoriaInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutUsuarioInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type categoriaCreateManyUsuarioInputEnvelope = {
    data: categoriaCreateManyUsuarioInput | categoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type notificacionCreateWithoutUsuarioInput = {
    descripcion: string
    fecha_notificacion?: Date | string
    perfil?: perfilCreateNestedOneWithoutNotificacionInput
  }

  export type notificacionUncheckedCreateWithoutUsuarioInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_perfil?: number | null
  }

  export type notificacionCreateOrConnectWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    create: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type notificacionCreateManyUsuarioInputEnvelope = {
    data: notificacionCreateManyUsuarioInput | notificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type perfilCreateWithoutUsuarioInput = {
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionCreateNestedManyWithoutPerfilInput
    transaccion?: transaccionCreateNestedManyWithoutPerfilInput
  }

  export type perfilUncheckedCreateWithoutUsuarioInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
    notificacion?: notificacionUncheckedCreateNestedManyWithoutPerfilInput
    transaccion?: transaccionUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type perfilCreateOrConnectWithoutUsuarioInput = {
    where: perfilWhereUniqueInput
    create: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput>
  }

  export type perfilCreateManyUsuarioInputEnvelope = {
    data: perfilCreateManyUsuarioInput | perfilCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type personaCreateWithoutUsuarioInput = {
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    transaccion?: transaccionCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutUsuarioInput = {
    id_persona?: number
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
    transaccion?: transaccionUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutUsuarioInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
  }

  export type personaCreateManyUsuarioInputEnvelope = {
    data: personaCreateManyUsuarioInput | personaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type subcategoriaCreateWithoutUsuarioInput = {
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    icono?: number
    categoria?: categoriaCreateNestedOneWithoutSubcategoriaInput
    transaccion?: transaccionCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaUncheckedCreateWithoutUsuarioInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_categoria?: number | null
    mostrar_panel?: boolean | null
    icono?: number
    transaccion?: transaccionUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type subcategoriaCreateOrConnectWithoutUsuarioInput = {
    where: subcategoriaWhereUniqueInput
    create: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type subcategoriaCreateManyUsuarioInputEnvelope = {
    data: subcategoriaCreateManyUsuarioInput | subcategoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type transaccionCreateWithoutUsuarioInput = {
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    categoria?: categoriaCreateNestedOneWithoutTransaccionInput
    perfil?: perfilCreateNestedOneWithoutTransaccionInput
    persona?: personaCreateNestedOneWithoutTransaccionInput
    subcategoria?: subcategoriaCreateNestedOneWithoutTransaccionInput
    transaccion_cuota?: transaccion_cuotaCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionUncheckedCreateWithoutUsuarioInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
    transaccion_cuota?: transaccion_cuotaUncheckedCreateNestedManyWithoutTransaccionInput
  }

  export type transaccionCreateOrConnectWithoutUsuarioInput = {
    where: transaccionWhereUniqueInput
    create: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput>
  }

  export type transaccionCreateManyUsuarioInputEnvelope = {
    data: transaccionCreateManyUsuarioInput | transaccionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type balanceUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: balanceWhereUniqueInput
    update: XOR<balanceUpdateWithoutUsuarioInput, balanceUncheckedUpdateWithoutUsuarioInput>
    create: XOR<balanceCreateWithoutUsuarioInput, balanceUncheckedCreateWithoutUsuarioInput>
  }

  export type balanceUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: balanceWhereUniqueInput
    data: XOR<balanceUpdateWithoutUsuarioInput, balanceUncheckedUpdateWithoutUsuarioInput>
  }

  export type balanceUpdateManyWithWhereWithoutUsuarioInput = {
    where: balanceScalarWhereInput
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type balanceScalarWhereInput = {
    AND?: balanceScalarWhereInput | balanceScalarWhereInput[]
    OR?: balanceScalarWhereInput[]
    NOT?: balanceScalarWhereInput | balanceScalarWhereInput[]
    id_balance?: IntFilter<"balance"> | number
    total_ingreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFilter<"balance"> | Decimal | DecimalJsLike | number | string
    id_usuario?: IntNullableFilter<"balance"> | number | null
  }

  export type categoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: categoriaWhereUniqueInput
    update: XOR<categoriaUpdateWithoutUsuarioInput, categoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<categoriaCreateWithoutUsuarioInput, categoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type categoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: categoriaWhereUniqueInput
    data: XOR<categoriaUpdateWithoutUsuarioInput, categoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type categoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: categoriaScalarWhereInput
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type categoriaScalarWhereInput = {
    AND?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
    OR?: categoriaScalarWhereInput[]
    NOT?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    nombre?: StringFilter<"categoria"> | string
    tipo?: Enumtipo_movimientoFilter<"categoria"> | $Enums.tipo_movimiento
    estatus?: EnumestatusFilter<"categoria"> | $Enums.estatus
    flujo?: Enumflujo_efectivoFilter<"categoria"> | $Enums.flujo_efectivo
    id_usuario?: IntNullableFilter<"categoria"> | number | null
    mostrar_panel?: BoolFilter<"categoria"> | boolean
    icono?: IntFilter<"categoria"> | number
  }

  export type notificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    update: XOR<notificacionUpdateWithoutUsuarioInput, notificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<notificacionCreateWithoutUsuarioInput, notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type notificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: notificacionWhereUniqueInput
    data: XOR<notificacionUpdateWithoutUsuarioInput, notificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type notificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: notificacionScalarWhereInput
    data: XOR<notificacionUpdateManyMutationInput, notificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type perfilUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: perfilWhereUniqueInput
    update: XOR<perfilUpdateWithoutUsuarioInput, perfilUncheckedUpdateWithoutUsuarioInput>
    create: XOR<perfilCreateWithoutUsuarioInput, perfilUncheckedCreateWithoutUsuarioInput>
  }

  export type perfilUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: perfilWhereUniqueInput
    data: XOR<perfilUpdateWithoutUsuarioInput, perfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type perfilUpdateManyWithWhereWithoutUsuarioInput = {
    where: perfilScalarWhereInput
    data: XOR<perfilUpdateManyMutationInput, perfilUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type perfilScalarWhereInput = {
    AND?: perfilScalarWhereInput | perfilScalarWhereInput[]
    OR?: perfilScalarWhereInput[]
    NOT?: perfilScalarWhereInput | perfilScalarWhereInput[]
    id_perfil?: IntFilter<"perfil"> | number
    nombre?: StringFilter<"perfil"> | string
    icono?: IntNullableFilter<"perfil"> | number | null
    fecha_creacion?: DateTimeFilter<"perfil"> | Date | string
    estatus?: EnumestatusFilter<"perfil"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"perfil"> | number | null
    pin?: StringNullableFilter<"perfil"> | string | null
    super_usuario?: BoolNullableFilter<"perfil"> | boolean | null
  }

  export type personaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: personaWhereUniqueInput
    update: XOR<personaUpdateWithoutUsuarioInput, personaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<personaCreateWithoutUsuarioInput, personaUncheckedCreateWithoutUsuarioInput>
  }

  export type personaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: personaWhereUniqueInput
    data: XOR<personaUpdateWithoutUsuarioInput, personaUncheckedUpdateWithoutUsuarioInput>
  }

  export type personaUpdateManyWithWhereWithoutUsuarioInput = {
    where: personaScalarWhereInput
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type personaScalarWhereInput = {
    AND?: personaScalarWhereInput | personaScalarWhereInput[]
    OR?: personaScalarWhereInput[]
    NOT?: personaScalarWhereInput | personaScalarWhereInput[]
    id_persona?: IntFilter<"persona"> | number
    nombre?: StringFilter<"persona"> | string
    tipo?: Enumtipo_personaFilter<"persona"> | $Enums.tipo_persona
    estatus?: EnumestatusFilter<"persona"> | $Enums.estatus
    id_usuario?: IntNullableFilter<"persona"> | number | null
  }

  export type subcategoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: subcategoriaWhereUniqueInput
    update: XOR<subcategoriaUpdateWithoutUsuarioInput, subcategoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<subcategoriaCreateWithoutUsuarioInput, subcategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type subcategoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: subcategoriaWhereUniqueInput
    data: XOR<subcategoriaUpdateWithoutUsuarioInput, subcategoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type subcategoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: subcategoriaScalarWhereInput
    data: XOR<subcategoriaUpdateManyMutationInput, subcategoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type transaccionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: transaccionWhereUniqueInput
    update: XOR<transaccionUpdateWithoutUsuarioInput, transaccionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<transaccionCreateWithoutUsuarioInput, transaccionUncheckedCreateWithoutUsuarioInput>
  }

  export type transaccionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: transaccionWhereUniqueInput
    data: XOR<transaccionUpdateWithoutUsuarioInput, transaccionUncheckedUpdateWithoutUsuarioInput>
  }

  export type transaccionUpdateManyWithWhereWithoutUsuarioInput = {
    where: transaccionScalarWhereInput
    data: XOR<transaccionUpdateManyMutationInput, transaccionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type subcategoriaCreateManyCategoriaInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean | null
    id_usuario?: number | null
    icono?: number
  }

  export type transaccionCreateManyCategoriaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
  }

  export type subcategoriaUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneWithoutSubcategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateWithoutCategoriaInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    icono?: IntFieldUpdateOperationsInput | number
    transaccion?: transaccionUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateManyWithoutCategoriaInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionUpdateWithoutCategoriaInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutCategoriaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateManyWithoutCategoriaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionCreateManyPerfilInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_usuario?: number | null
  }

  export type transaccionCreateManyPerfilInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
  }

  export type notificacionUpdateWithoutPerfilInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateWithoutPerfilInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionUncheckedUpdateManyWithoutPerfilInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccionUpdateWithoutPerfilInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutPerfilInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateManyWithoutPerfilInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccionCreateManyPersonaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
  }

  export type transaccionUpdateWithoutPersonaInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutPersonaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateManyWithoutPersonaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccionCreateManySubcategoriaInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_usuario?: number | null
    id_perfil?: number | null
    id_persona?: number | null
  }

  export type transaccionUpdateWithoutSubcategoriaInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    usuario?: usuarioUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutSubcategoriaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateManyWithoutSubcategoriaInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaccion_cuotaCreateManyTransaccionInput = {
    id_cuota?: number
    monto: Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: Date | string | null
    fecha_pago?: Date | string | null
    estatus?: $Enums.estatus_transaccion
    pagado?: Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUpdateWithoutTransaccionInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUncheckedUpdateWithoutTransaccionInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transaccion_cuotaUncheckedUpdateManyWithoutTransaccionInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type balanceCreateManyUsuarioInput = {
    id_balance?: number
    total_ingreso: Decimal | DecimalJsLike | number | string
    total_egreso: Decimal | DecimalJsLike | number | string
    resultado_neto: Decimal | DecimalJsLike | number | string
    presupuesto: Decimal | DecimalJsLike | number | string
    ahorro_mensual?: Decimal | DecimalJsLike | number | string
    resultado_final: Decimal | DecimalJsLike | number | string
  }

  export type categoriaCreateManyUsuarioInput = {
    id_categoria?: number
    nombre: string
    tipo?: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    mostrar_panel?: boolean
    icono?: number
  }

  export type notificacionCreateManyUsuarioInput = {
    id_notificacion?: number
    descripcion: string
    fecha_notificacion?: Date | string
    id_perfil?: number | null
  }

  export type perfilCreateManyUsuarioInput = {
    id_perfil?: number
    nombre: string
    icono?: number | null
    fecha_creacion?: Date | string
    estatus?: $Enums.estatus
    pin?: string | null
    super_usuario?: boolean | null
  }

  export type personaCreateManyUsuarioInput = {
    id_persona?: number
    nombre: string
    tipo?: $Enums.tipo_persona
    estatus?: $Enums.estatus
  }

  export type subcategoriaCreateManyUsuarioInput = {
    id_subcategoria?: number
    nombre: string
    tipo: $Enums.tipo_movimiento
    estatus?: $Enums.estatus
    flujo?: $Enums.flujo_efectivo
    id_categoria?: number | null
    mostrar_panel?: boolean | null
    icono?: number
  }

  export type transaccionCreateManyUsuarioInput = {
    id_transaccion?: number
    tipo: $Enums.tipo_movimiento
    fecha_transaccion?: Date | string
    nota?: string | null
    monto_total: Decimal | DecimalJsLike | number | string
    plazos?: number | null
    estatus?: $Enums.estatus_transaccion
    id_categoria?: number | null
    id_perfil?: number | null
    id_subcategoria?: number | null
    id_persona?: number | null
  }

  export type balanceUpdateWithoutUsuarioInput = {
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type balanceUncheckedUpdateWithoutUsuarioInput = {
    id_balance?: IntFieldUpdateOperationsInput | number
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type balanceUncheckedUpdateManyWithoutUsuarioInput = {
    id_balance?: IntFieldUpdateOperationsInput | number
    total_ingreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_egreso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_neto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    presupuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ahorro_mensual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultado_final?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type categoriaUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    subcategoria?: subcategoriaUpdateManyWithoutCategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutUsuarioInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
    subcategoria?: subcategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: BoolFieldUpdateOperationsInput | boolean
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type notificacionUpdateWithoutUsuarioInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: perfilUpdateOneWithoutNotificacionNestedInput
  }

  export type notificacionUncheckedUpdateWithoutUsuarioInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id_notificacion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_notificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type perfilUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUpdateManyWithoutPerfilNestedInput
    transaccion?: transaccionUpdateManyWithoutPerfilNestedInput
  }

  export type perfilUncheckedUpdateWithoutUsuarioInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notificacion?: notificacionUncheckedUpdateManyWithoutPerfilNestedInput
    transaccion?: transaccionUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type perfilUncheckedUpdateManyWithoutUsuarioInput = {
    id_perfil?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    icono?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    pin?: NullableStringFieldUpdateOperationsInput | string | null
    super_usuario?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type personaUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    transaccion?: transaccionUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutUsuarioInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    transaccion?: transaccionUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateManyWithoutUsuarioInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_personaFieldUpdateOperationsInput | $Enums.tipo_persona
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
  }

  export type subcategoriaUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
    categoria?: categoriaUpdateOneWithoutSubcategoriaNestedInput
    transaccion?: transaccionUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateWithoutUsuarioInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
    transaccion?: transaccionUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type subcategoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id_subcategoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    estatus?: EnumestatusFieldUpdateOperationsInput | $Enums.estatus
    flujo?: Enumflujo_efectivoFieldUpdateOperationsInput | $Enums.flujo_efectivo
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    mostrar_panel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    icono?: IntFieldUpdateOperationsInput | number
  }

  export type transaccionUpdateWithoutUsuarioInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    categoria?: categoriaUpdateOneWithoutTransaccionNestedInput
    perfil?: perfilUpdateOneWithoutTransaccionNestedInput
    persona?: personaUpdateOneWithoutTransaccionNestedInput
    subcategoria?: subcategoriaUpdateOneWithoutTransaccionNestedInput
    transaccion_cuota?: transaccion_cuotaUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateWithoutUsuarioInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
    transaccion_cuota?: transaccion_cuotaUncheckedUpdateManyWithoutTransaccionNestedInput
  }

  export type transaccionUncheckedUpdateManyWithoutUsuarioInput = {
    id_transaccion?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    fecha_transaccion?: DateTimeFieldUpdateOperationsInput | Date | string
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plazos?: NullableIntFieldUpdateOperationsInput | number | null
    estatus?: Enumestatus_transaccionFieldUpdateOperationsInput | $Enums.estatus_transaccion
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_perfil?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_persona?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}