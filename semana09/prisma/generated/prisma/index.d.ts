
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
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Operacion
 * 
 */
export type Operacion = $Result.DefaultSelection<Prisma.$OperacionPayload>
/**
 * Model DetalleOperacion
 * 
 */
export type DetalleOperacion = $Result.DefaultSelection<Prisma.$DetalleOperacionPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  ADMIN: 'ADMIN',
  CAJERO: 'CAJERO'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const TipoDocumento: {
  DNI: 'DNI',
  CE: 'CE',
  RUC: 'RUC'
};

export type TipoDocumento = (typeof TipoDocumento)[keyof typeof TipoDocumento]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type TipoDocumento = $Enums.TipoDocumento

export const TipoDocumento: typeof $Enums.TipoDocumento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Productos
 * const productos = await prisma.producto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Productos
   * const productos = await prisma.producto.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacion`: Exposes CRUD operations for the **Operacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operacions
    * const operacions = await prisma.operacion.findMany()
    * ```
    */
  get operacion(): Prisma.OperacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleOperacion`: Exposes CRUD operations for the **DetalleOperacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleOperacions
    * const detalleOperacions = await prisma.detalleOperacion.findMany()
    * ```
    */
  get detalleOperacion(): Prisma.DetalleOperacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Producto: 'Producto',
    Cliente: 'Cliente',
    Operacion: 'Operacion',
    DetalleOperacion: 'DetalleOperacion',
    Usuario: 'Usuario'
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
      modelProps: "producto" | "cliente" | "operacion" | "detalleOperacion" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Operacion: {
        payload: Prisma.$OperacionPayload<ExtArgs>
        fields: Prisma.OperacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          findFirst: {
            args: Prisma.OperacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          findMany: {
            args: Prisma.OperacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>[]
          }
          create: {
            args: Prisma.OperacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          createMany: {
            args: Prisma.OperacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>[]
          }
          delete: {
            args: Prisma.OperacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          update: {
            args: Prisma.OperacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          deleteMany: {
            args: Prisma.OperacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>[]
          }
          upsert: {
            args: Prisma.OperacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacionPayload>
          }
          aggregate: {
            args: Prisma.OperacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacion>
          }
          groupBy: {
            args: Prisma.OperacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperacionCountArgs<ExtArgs>
            result: $Utils.Optional<OperacionCountAggregateOutputType> | number
          }
        }
      }
      DetalleOperacion: {
        payload: Prisma.$DetalleOperacionPayload<ExtArgs>
        fields: Prisma.DetalleOperacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleOperacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleOperacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          findFirst: {
            args: Prisma.DetalleOperacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleOperacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          findMany: {
            args: Prisma.DetalleOperacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>[]
          }
          create: {
            args: Prisma.DetalleOperacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          createMany: {
            args: Prisma.DetalleOperacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleOperacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>[]
          }
          delete: {
            args: Prisma.DetalleOperacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          update: {
            args: Prisma.DetalleOperacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          deleteMany: {
            args: Prisma.DetalleOperacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleOperacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleOperacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>[]
          }
          upsert: {
            args: Prisma.DetalleOperacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleOperacionPayload>
          }
          aggregate: {
            args: Prisma.DetalleOperacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleOperacion>
          }
          groupBy: {
            args: Prisma.DetalleOperacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleOperacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleOperacionCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleOperacionCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    producto?: ProductoOmit
    cliente?: ClienteOmit
    operacion?: OperacionOmit
    detalleOperacion?: DetalleOperacionOmit
    usuario?: UsuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalleOperaciones: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleOperaciones?: boolean | ProductoCountOutputTypeCountDetalleOperacionesArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetalleOperacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleOperacionWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    operaciones: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operaciones?: boolean | ClienteCountOutputTypeCountOperacionesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOperacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperacionWhereInput
  }


  /**
   * Count Type OperacionCountOutputType
   */

  export type OperacionCountOutputType = {
    detalleOperaciones: number
  }

  export type OperacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleOperaciones?: boolean | OperacionCountOutputTypeCountDetalleOperacionesArgs
  }

  // Custom InputTypes
  /**
   * OperacionCountOutputType without action
   */
  export type OperacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacionCountOutputType
     */
    select?: OperacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperacionCountOutputType without action
   */
  export type OperacionCountOutputTypeCountDetalleOperacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleOperacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    cantidad: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    cantidad: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    disponible: boolean | null
    cantidad: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    disponible: boolean | null
    cantidad: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    disponible: number
    cantidad: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    cantidad?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    cantidad?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    disponible?: true
    cantidad?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    disponible?: true
    cantidad?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    disponible?: true
    cantidad?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: number
    disponible: boolean
    cantidad: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    disponible?: boolean
    cantidad?: boolean
    detalleOperaciones?: boolean | Producto$detalleOperacionesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    disponible?: boolean
    cantidad?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    disponible?: boolean
    cantidad?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    disponible?: boolean
    cantidad?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "disponible" | "cantidad", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalleOperaciones?: boolean | Producto$detalleOperacionesArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      detalleOperaciones: Prisma.$DetalleOperacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: number
      disponible: boolean
      cantidad: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalleOperaciones<T extends Producto$detalleOperacionesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detalleOperacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly disponible: FieldRef<"Producto", 'Boolean'>
    readonly cantidad: FieldRef<"Producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.detalleOperaciones
   */
  export type Producto$detalleOperacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    where?: DetalleOperacionWhereInput
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    cursor?: DetalleOperacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleOperacionScalarFieldEnum | DetalleOperacionScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    numeroDocumento: string | null
    correo: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    tipoDocumento: $Enums.TipoDocumento | null
    numeroDocumento: string | null
    correo: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    tipoDocumento: number
    numeroDocumento: number
    correo: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    tipoDocumento?: true
    numeroDocumento?: true
    correo?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    tipoDocumento?: true
    numeroDocumento?: true
    correo?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    tipoDocumento?: true
    numeroDocumento?: true
    correo?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    tipoDocumento: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    correo?: boolean
    operaciones?: boolean | Cliente$operacionesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    correo?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    correo?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    correo?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "tipoDocumento" | "numeroDocumento" | "correo", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operaciones?: boolean | Cliente$operacionesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      operaciones: Prisma.$OperacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
      tipoDocumento: $Enums.TipoDocumento
      numeroDocumento: string
      correo: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operaciones<T extends Cliente$operacionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$operacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly tipoDocumento: FieldRef<"Cliente", 'TipoDocumento'>
    readonly numeroDocumento: FieldRef<"Cliente", 'String'>
    readonly correo: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.operaciones
   */
  export type Cliente$operacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    where?: OperacionWhereInput
    orderBy?: OperacionOrderByWithRelationInput | OperacionOrderByWithRelationInput[]
    cursor?: OperacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Operacion
   */

  export type AggregateOperacion = {
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  export type OperacionAvgAggregateOutputType = {
    id: number | null
    total: number | null
    clienteId: number | null
  }

  export type OperacionSumAggregateOutputType = {
    id: number | null
    total: number | null
    clienteId: number | null
  }

  export type OperacionMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: number | null
    clienteId: number | null
  }

  export type OperacionMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    total: number | null
    clienteId: number | null
  }

  export type OperacionCountAggregateOutputType = {
    id: number
    fecha: number
    total: number
    clienteId: number
    _all: number
  }


  export type OperacionAvgAggregateInputType = {
    id?: true
    total?: true
    clienteId?: true
  }

  export type OperacionSumAggregateInputType = {
    id?: true
    total?: true
    clienteId?: true
  }

  export type OperacionMinAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
  }

  export type OperacionMaxAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
  }

  export type OperacionCountAggregateInputType = {
    id?: true
    fecha?: true
    total?: true
    clienteId?: true
    _all?: true
  }

  export type OperacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operacion to aggregate.
     */
    where?: OperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operacions to fetch.
     */
    orderBy?: OperacionOrderByWithRelationInput | OperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operacions
    **/
    _count?: true | OperacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperacionMaxAggregateInputType
  }

  export type GetOperacionAggregateType<T extends OperacionAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacion[P]>
      : GetScalarType<T[P], AggregateOperacion[P]>
  }




  export type OperacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperacionWhereInput
    orderBy?: OperacionOrderByWithAggregationInput | OperacionOrderByWithAggregationInput[]
    by: OperacionScalarFieldEnum[] | OperacionScalarFieldEnum
    having?: OperacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperacionCountAggregateInputType | true
    _avg?: OperacionAvgAggregateInputType
    _sum?: OperacionSumAggregateInputType
    _min?: OperacionMinAggregateInputType
    _max?: OperacionMaxAggregateInputType
  }

  export type OperacionGroupByOutputType = {
    id: number
    fecha: Date
    total: number | null
    clienteId: number
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  type GetOperacionGroupByPayload<T extends OperacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperacionGroupByOutputType[P]>
            : GetScalarType<T[P], OperacionGroupByOutputType[P]>
        }
      >
    >


  export type OperacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    detalleOperaciones?: boolean | Operacion$detalleOperacionesArgs<ExtArgs>
    _count?: boolean | OperacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type OperacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type OperacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>

  export type OperacionSelectScalar = {
    id?: boolean
    fecha?: boolean
    total?: boolean
    clienteId?: boolean
  }

  export type OperacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "total" | "clienteId", ExtArgs["result"]["operacion"]>
  export type OperacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    detalleOperaciones?: boolean | Operacion$detalleOperacionesArgs<ExtArgs>
    _count?: boolean | OperacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type OperacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $OperacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operacion"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      detalleOperaciones: Prisma.$DetalleOperacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      total: number | null
      clienteId: number
    }, ExtArgs["result"]["operacion"]>
    composites: {}
  }

  type OperacionGetPayload<S extends boolean | null | undefined | OperacionDefaultArgs> = $Result.GetResult<Prisma.$OperacionPayload, S>

  type OperacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperacionCountAggregateInputType | true
    }

  export interface OperacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operacion'], meta: { name: 'Operacion' } }
    /**
     * Find zero or one Operacion that matches the filter.
     * @param {OperacionFindUniqueArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperacionFindUniqueArgs>(args: SelectSubset<T, OperacionFindUniqueArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperacionFindUniqueOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperacionFindUniqueOrThrowArgs>(args: SelectSubset<T, OperacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionFindFirstArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperacionFindFirstArgs>(args?: SelectSubset<T, OperacionFindFirstArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionFindFirstOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperacionFindFirstOrThrowArgs>(args?: SelectSubset<T, OperacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operacions
     * const operacions = await prisma.operacion.findMany()
     * 
     * // Get first 10 Operacions
     * const operacions = await prisma.operacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operacionWithIdOnly = await prisma.operacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperacionFindManyArgs>(args?: SelectSubset<T, OperacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operacion.
     * @param {OperacionCreateArgs} args - Arguments to create a Operacion.
     * @example
     * // Create one Operacion
     * const Operacion = await prisma.operacion.create({
     *   data: {
     *     // ... data to create a Operacion
     *   }
     * })
     * 
     */
    create<T extends OperacionCreateArgs>(args: SelectSubset<T, OperacionCreateArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operacions.
     * @param {OperacionCreateManyArgs} args - Arguments to create many Operacions.
     * @example
     * // Create many Operacions
     * const operacion = await prisma.operacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperacionCreateManyArgs>(args?: SelectSubset<T, OperacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operacions and returns the data saved in the database.
     * @param {OperacionCreateManyAndReturnArgs} args - Arguments to create many Operacions.
     * @example
     * // Create many Operacions
     * const operacion = await prisma.operacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operacions and only return the `id`
     * const operacionWithIdOnly = await prisma.operacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperacionCreateManyAndReturnArgs>(args?: SelectSubset<T, OperacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operacion.
     * @param {OperacionDeleteArgs} args - Arguments to delete one Operacion.
     * @example
     * // Delete one Operacion
     * const Operacion = await prisma.operacion.delete({
     *   where: {
     *     // ... filter to delete one Operacion
     *   }
     * })
     * 
     */
    delete<T extends OperacionDeleteArgs>(args: SelectSubset<T, OperacionDeleteArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operacion.
     * @param {OperacionUpdateArgs} args - Arguments to update one Operacion.
     * @example
     * // Update one Operacion
     * const operacion = await prisma.operacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperacionUpdateArgs>(args: SelectSubset<T, OperacionUpdateArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operacions.
     * @param {OperacionDeleteManyArgs} args - Arguments to filter Operacions to delete.
     * @example
     * // Delete a few Operacions
     * const { count } = await prisma.operacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperacionDeleteManyArgs>(args?: SelectSubset<T, OperacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operacions
     * const operacion = await prisma.operacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperacionUpdateManyArgs>(args: SelectSubset<T, OperacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacions and returns the data updated in the database.
     * @param {OperacionUpdateManyAndReturnArgs} args - Arguments to update many Operacions.
     * @example
     * // Update many Operacions
     * const operacion = await prisma.operacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operacions and only return the `id`
     * const operacionWithIdOnly = await prisma.operacion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends OperacionUpdateManyAndReturnArgs>(args: SelectSubset<T, OperacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operacion.
     * @param {OperacionUpsertArgs} args - Arguments to update or create a Operacion.
     * @example
     * // Update or create a Operacion
     * const operacion = await prisma.operacion.upsert({
     *   create: {
     *     // ... data to create a Operacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operacion we want to update
     *   }
     * })
     */
    upsert<T extends OperacionUpsertArgs>(args: SelectSubset<T, OperacionUpsertArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionCountArgs} args - Arguments to filter Operacions to count.
     * @example
     * // Count the number of Operacions
     * const count = await prisma.operacion.count({
     *   where: {
     *     // ... the filter for the Operacions we want to count
     *   }
     * })
    **/
    count<T extends OperacionCountArgs>(
      args?: Subset<T, OperacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperacionAggregateArgs>(args: Subset<T, OperacionAggregateArgs>): Prisma.PrismaPromise<GetOperacionAggregateType<T>>

    /**
     * Group by Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionGroupByArgs} args - Group by arguments.
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
      T extends OperacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperacionGroupByArgs['orderBy'] }
        : { orderBy?: OperacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operacion model
   */
  readonly fields: OperacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalleOperaciones<T extends Operacion$detalleOperacionesArgs<ExtArgs> = {}>(args?: Subset<T, Operacion$detalleOperacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Operacion model
   */
  interface OperacionFieldRefs {
    readonly id: FieldRef<"Operacion", 'Int'>
    readonly fecha: FieldRef<"Operacion", 'DateTime'>
    readonly total: FieldRef<"Operacion", 'Float'>
    readonly clienteId: FieldRef<"Operacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Operacion findUnique
   */
  export type OperacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter, which Operacion to fetch.
     */
    where: OperacionWhereUniqueInput
  }

  /**
   * Operacion findUniqueOrThrow
   */
  export type OperacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter, which Operacion to fetch.
     */
    where: OperacionWhereUniqueInput
  }

  /**
   * Operacion findFirst
   */
  export type OperacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter, which Operacion to fetch.
     */
    where?: OperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operacions to fetch.
     */
    orderBy?: OperacionOrderByWithRelationInput | OperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operacions.
     */
    cursor?: OperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * Operacion findFirstOrThrow
   */
  export type OperacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter, which Operacion to fetch.
     */
    where?: OperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operacions to fetch.
     */
    orderBy?: OperacionOrderByWithRelationInput | OperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operacions.
     */
    cursor?: OperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * Operacion findMany
   */
  export type OperacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter, which Operacions to fetch.
     */
    where?: OperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operacions to fetch.
     */
    orderBy?: OperacionOrderByWithRelationInput | OperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operacions.
     */
    cursor?: OperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operacions.
     */
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * Operacion create
   */
  export type OperacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Operacion.
     */
    data: XOR<OperacionCreateInput, OperacionUncheckedCreateInput>
  }

  /**
   * Operacion createMany
   */
  export type OperacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operacions.
     */
    data: OperacionCreateManyInput | OperacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operacion createManyAndReturn
   */
  export type OperacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * The data used to create many Operacions.
     */
    data: OperacionCreateManyInput | OperacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operacion update
   */
  export type OperacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Operacion.
     */
    data: XOR<OperacionUpdateInput, OperacionUncheckedUpdateInput>
    /**
     * Choose, which Operacion to update.
     */
    where: OperacionWhereUniqueInput
  }

  /**
   * Operacion updateMany
   */
  export type OperacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operacions.
     */
    data: XOR<OperacionUpdateManyMutationInput, OperacionUncheckedUpdateManyInput>
    /**
     * Filter which Operacions to update
     */
    where?: OperacionWhereInput
    /**
     * Limit how many Operacions to update.
     */
    limit?: number
  }

  /**
   * Operacion updateManyAndReturn
   */
  export type OperacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * The data used to update Operacions.
     */
    data: XOR<OperacionUpdateManyMutationInput, OperacionUncheckedUpdateManyInput>
    /**
     * Filter which Operacions to update
     */
    where?: OperacionWhereInput
    /**
     * Limit how many Operacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operacion upsert
   */
  export type OperacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Operacion to update in case it exists.
     */
    where: OperacionWhereUniqueInput
    /**
     * In case the Operacion found by the `where` argument doesn't exist, create a new Operacion with this data.
     */
    create: XOR<OperacionCreateInput, OperacionUncheckedCreateInput>
    /**
     * In case the Operacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperacionUpdateInput, OperacionUncheckedUpdateInput>
  }

  /**
   * Operacion delete
   */
  export type OperacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
    /**
     * Filter which Operacion to delete.
     */
    where: OperacionWhereUniqueInput
  }

  /**
   * Operacion deleteMany
   */
  export type OperacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operacions to delete
     */
    where?: OperacionWhereInput
    /**
     * Limit how many Operacions to delete.
     */
    limit?: number
  }

  /**
   * Operacion.detalleOperaciones
   */
  export type Operacion$detalleOperacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    where?: DetalleOperacionWhereInput
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    cursor?: DetalleOperacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleOperacionScalarFieldEnum | DetalleOperacionScalarFieldEnum[]
  }

  /**
   * Operacion without action
   */
  export type OperacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operacion
     */
    select?: OperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operacion
     */
    omit?: OperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacionInclude<ExtArgs> | null
  }


  /**
   * Model DetalleOperacion
   */

  export type AggregateDetalleOperacion = {
    _count: DetalleOperacionCountAggregateOutputType | null
    _avg: DetalleOperacionAvgAggregateOutputType | null
    _sum: DetalleOperacionSumAggregateOutputType | null
    _min: DetalleOperacionMinAggregateOutputType | null
    _max: DetalleOperacionMaxAggregateOutputType | null
  }

  export type DetalleOperacionAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    subTotal: number | null
    productoId: number | null
    operacionId: number | null
  }

  export type DetalleOperacionSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    subTotal: number | null
    productoId: number | null
    operacionId: number | null
  }

  export type DetalleOperacionMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    subTotal: number | null
    productoId: number | null
    operacionId: number | null
  }

  export type DetalleOperacionMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    subTotal: number | null
    productoId: number | null
    operacionId: number | null
  }

  export type DetalleOperacionCountAggregateOutputType = {
    id: number
    cantidad: number
    subTotal: number
    productoId: number
    operacionId: number
    _all: number
  }


  export type DetalleOperacionAvgAggregateInputType = {
    id?: true
    cantidad?: true
    subTotal?: true
    productoId?: true
    operacionId?: true
  }

  export type DetalleOperacionSumAggregateInputType = {
    id?: true
    cantidad?: true
    subTotal?: true
    productoId?: true
    operacionId?: true
  }

  export type DetalleOperacionMinAggregateInputType = {
    id?: true
    cantidad?: true
    subTotal?: true
    productoId?: true
    operacionId?: true
  }

  export type DetalleOperacionMaxAggregateInputType = {
    id?: true
    cantidad?: true
    subTotal?: true
    productoId?: true
    operacionId?: true
  }

  export type DetalleOperacionCountAggregateInputType = {
    id?: true
    cantidad?: true
    subTotal?: true
    productoId?: true
    operacionId?: true
    _all?: true
  }

  export type DetalleOperacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleOperacion to aggregate.
     */
    where?: DetalleOperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleOperacions to fetch.
     */
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleOperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleOperacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleOperacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleOperacions
    **/
    _count?: true | DetalleOperacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleOperacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleOperacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleOperacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleOperacionMaxAggregateInputType
  }

  export type GetDetalleOperacionAggregateType<T extends DetalleOperacionAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleOperacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleOperacion[P]>
      : GetScalarType<T[P], AggregateDetalleOperacion[P]>
  }




  export type DetalleOperacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleOperacionWhereInput
    orderBy?: DetalleOperacionOrderByWithAggregationInput | DetalleOperacionOrderByWithAggregationInput[]
    by: DetalleOperacionScalarFieldEnum[] | DetalleOperacionScalarFieldEnum
    having?: DetalleOperacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleOperacionCountAggregateInputType | true
    _avg?: DetalleOperacionAvgAggregateInputType
    _sum?: DetalleOperacionSumAggregateInputType
    _min?: DetalleOperacionMinAggregateInputType
    _max?: DetalleOperacionMaxAggregateInputType
  }

  export type DetalleOperacionGroupByOutputType = {
    id: number
    cantidad: number
    subTotal: number
    productoId: number
    operacionId: number
    _count: DetalleOperacionCountAggregateOutputType | null
    _avg: DetalleOperacionAvgAggregateOutputType | null
    _sum: DetalleOperacionSumAggregateOutputType | null
    _min: DetalleOperacionMinAggregateOutputType | null
    _max: DetalleOperacionMaxAggregateOutputType | null
  }

  type GetDetalleOperacionGroupByPayload<T extends DetalleOperacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleOperacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleOperacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleOperacionGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleOperacionGroupByOutputType[P]>
        }
      >
    >


  export type DetalleOperacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    subTotal?: boolean
    productoId?: boolean
    operacionId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleOperacion"]>

  export type DetalleOperacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    subTotal?: boolean
    productoId?: boolean
    operacionId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleOperacion"]>

  export type DetalleOperacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    subTotal?: boolean
    productoId?: boolean
    operacionId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleOperacion"]>

  export type DetalleOperacionSelectScalar = {
    id?: boolean
    cantidad?: boolean
    subTotal?: boolean
    productoId?: boolean
    operacionId?: boolean
  }

  export type DetalleOperacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cantidad" | "subTotal" | "productoId" | "operacionId", ExtArgs["result"]["detalleOperacion"]>
  export type DetalleOperacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }
  export type DetalleOperacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }
  export type DetalleOperacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    operacion?: boolean | OperacionDefaultArgs<ExtArgs>
  }

  export type $DetalleOperacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleOperacion"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      operacion: Prisma.$OperacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      subTotal: number
      productoId: number
      operacionId: number
    }, ExtArgs["result"]["detalleOperacion"]>
    composites: {}
  }

  type DetalleOperacionGetPayload<S extends boolean | null | undefined | DetalleOperacionDefaultArgs> = $Result.GetResult<Prisma.$DetalleOperacionPayload, S>

  type DetalleOperacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleOperacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleOperacionCountAggregateInputType | true
    }

  export interface DetalleOperacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleOperacion'], meta: { name: 'DetalleOperacion' } }
    /**
     * Find zero or one DetalleOperacion that matches the filter.
     * @param {DetalleOperacionFindUniqueArgs} args - Arguments to find a DetalleOperacion
     * @example
     * // Get one DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleOperacionFindUniqueArgs>(args: SelectSubset<T, DetalleOperacionFindUniqueArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleOperacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleOperacionFindUniqueOrThrowArgs} args - Arguments to find a DetalleOperacion
     * @example
     * // Get one DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleOperacionFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleOperacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleOperacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionFindFirstArgs} args - Arguments to find a DetalleOperacion
     * @example
     * // Get one DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleOperacionFindFirstArgs>(args?: SelectSubset<T, DetalleOperacionFindFirstArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleOperacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionFindFirstOrThrowArgs} args - Arguments to find a DetalleOperacion
     * @example
     * // Get one DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleOperacionFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleOperacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleOperacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleOperacions
     * const detalleOperacions = await prisma.detalleOperacion.findMany()
     * 
     * // Get first 10 DetalleOperacions
     * const detalleOperacions = await prisma.detalleOperacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleOperacionWithIdOnly = await prisma.detalleOperacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleOperacionFindManyArgs>(args?: SelectSubset<T, DetalleOperacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleOperacion.
     * @param {DetalleOperacionCreateArgs} args - Arguments to create a DetalleOperacion.
     * @example
     * // Create one DetalleOperacion
     * const DetalleOperacion = await prisma.detalleOperacion.create({
     *   data: {
     *     // ... data to create a DetalleOperacion
     *   }
     * })
     * 
     */
    create<T extends DetalleOperacionCreateArgs>(args: SelectSubset<T, DetalleOperacionCreateArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleOperacions.
     * @param {DetalleOperacionCreateManyArgs} args - Arguments to create many DetalleOperacions.
     * @example
     * // Create many DetalleOperacions
     * const detalleOperacion = await prisma.detalleOperacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleOperacionCreateManyArgs>(args?: SelectSubset<T, DetalleOperacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleOperacions and returns the data saved in the database.
     * @param {DetalleOperacionCreateManyAndReturnArgs} args - Arguments to create many DetalleOperacions.
     * @example
     * // Create many DetalleOperacions
     * const detalleOperacion = await prisma.detalleOperacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleOperacions and only return the `id`
     * const detalleOperacionWithIdOnly = await prisma.detalleOperacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleOperacionCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleOperacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleOperacion.
     * @param {DetalleOperacionDeleteArgs} args - Arguments to delete one DetalleOperacion.
     * @example
     * // Delete one DetalleOperacion
     * const DetalleOperacion = await prisma.detalleOperacion.delete({
     *   where: {
     *     // ... filter to delete one DetalleOperacion
     *   }
     * })
     * 
     */
    delete<T extends DetalleOperacionDeleteArgs>(args: SelectSubset<T, DetalleOperacionDeleteArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleOperacion.
     * @param {DetalleOperacionUpdateArgs} args - Arguments to update one DetalleOperacion.
     * @example
     * // Update one DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleOperacionUpdateArgs>(args: SelectSubset<T, DetalleOperacionUpdateArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleOperacions.
     * @param {DetalleOperacionDeleteManyArgs} args - Arguments to filter DetalleOperacions to delete.
     * @example
     * // Delete a few DetalleOperacions
     * const { count } = await prisma.detalleOperacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleOperacionDeleteManyArgs>(args?: SelectSubset<T, DetalleOperacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleOperacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleOperacions
     * const detalleOperacion = await prisma.detalleOperacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleOperacionUpdateManyArgs>(args: SelectSubset<T, DetalleOperacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleOperacions and returns the data updated in the database.
     * @param {DetalleOperacionUpdateManyAndReturnArgs} args - Arguments to update many DetalleOperacions.
     * @example
     * // Update many DetalleOperacions
     * const detalleOperacion = await prisma.detalleOperacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleOperacions and only return the `id`
     * const detalleOperacionWithIdOnly = await prisma.detalleOperacion.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DetalleOperacionUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleOperacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleOperacion.
     * @param {DetalleOperacionUpsertArgs} args - Arguments to update or create a DetalleOperacion.
     * @example
     * // Update or create a DetalleOperacion
     * const detalleOperacion = await prisma.detalleOperacion.upsert({
     *   create: {
     *     // ... data to create a DetalleOperacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleOperacion we want to update
     *   }
     * })
     */
    upsert<T extends DetalleOperacionUpsertArgs>(args: SelectSubset<T, DetalleOperacionUpsertArgs<ExtArgs>>): Prisma__DetalleOperacionClient<$Result.GetResult<Prisma.$DetalleOperacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleOperacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionCountArgs} args - Arguments to filter DetalleOperacions to count.
     * @example
     * // Count the number of DetalleOperacions
     * const count = await prisma.detalleOperacion.count({
     *   where: {
     *     // ... the filter for the DetalleOperacions we want to count
     *   }
     * })
    **/
    count<T extends DetalleOperacionCountArgs>(
      args?: Subset<T, DetalleOperacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleOperacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleOperacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleOperacionAggregateArgs>(args: Subset<T, DetalleOperacionAggregateArgs>): Prisma.PrismaPromise<GetDetalleOperacionAggregateType<T>>

    /**
     * Group by DetalleOperacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleOperacionGroupByArgs} args - Group by arguments.
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
      T extends DetalleOperacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleOperacionGroupByArgs['orderBy'] }
        : { orderBy?: DetalleOperacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleOperacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleOperacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleOperacion model
   */
  readonly fields: DetalleOperacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleOperacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleOperacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion<T extends OperacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperacionDefaultArgs<ExtArgs>>): Prisma__OperacionClient<$Result.GetResult<Prisma.$OperacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetalleOperacion model
   */
  interface DetalleOperacionFieldRefs {
    readonly id: FieldRef<"DetalleOperacion", 'Int'>
    readonly cantidad: FieldRef<"DetalleOperacion", 'Int'>
    readonly subTotal: FieldRef<"DetalleOperacion", 'Float'>
    readonly productoId: FieldRef<"DetalleOperacion", 'Int'>
    readonly operacionId: FieldRef<"DetalleOperacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleOperacion findUnique
   */
  export type DetalleOperacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter, which DetalleOperacion to fetch.
     */
    where: DetalleOperacionWhereUniqueInput
  }

  /**
   * DetalleOperacion findUniqueOrThrow
   */
  export type DetalleOperacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter, which DetalleOperacion to fetch.
     */
    where: DetalleOperacionWhereUniqueInput
  }

  /**
   * DetalleOperacion findFirst
   */
  export type DetalleOperacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter, which DetalleOperacion to fetch.
     */
    where?: DetalleOperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleOperacions to fetch.
     */
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleOperacions.
     */
    cursor?: DetalleOperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleOperacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleOperacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleOperacions.
     */
    distinct?: DetalleOperacionScalarFieldEnum | DetalleOperacionScalarFieldEnum[]
  }

  /**
   * DetalleOperacion findFirstOrThrow
   */
  export type DetalleOperacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter, which DetalleOperacion to fetch.
     */
    where?: DetalleOperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleOperacions to fetch.
     */
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleOperacions.
     */
    cursor?: DetalleOperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleOperacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleOperacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleOperacions.
     */
    distinct?: DetalleOperacionScalarFieldEnum | DetalleOperacionScalarFieldEnum[]
  }

  /**
   * DetalleOperacion findMany
   */
  export type DetalleOperacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter, which DetalleOperacions to fetch.
     */
    where?: DetalleOperacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleOperacions to fetch.
     */
    orderBy?: DetalleOperacionOrderByWithRelationInput | DetalleOperacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleOperacions.
     */
    cursor?: DetalleOperacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleOperacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleOperacions.
     */
    skip?: number
    distinct?: DetalleOperacionScalarFieldEnum | DetalleOperacionScalarFieldEnum[]
  }

  /**
   * DetalleOperacion create
   */
  export type DetalleOperacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleOperacion.
     */
    data: XOR<DetalleOperacionCreateInput, DetalleOperacionUncheckedCreateInput>
  }

  /**
   * DetalleOperacion createMany
   */
  export type DetalleOperacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleOperacions.
     */
    data: DetalleOperacionCreateManyInput | DetalleOperacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleOperacion createManyAndReturn
   */
  export type DetalleOperacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleOperacions.
     */
    data: DetalleOperacionCreateManyInput | DetalleOperacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleOperacion update
   */
  export type DetalleOperacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleOperacion.
     */
    data: XOR<DetalleOperacionUpdateInput, DetalleOperacionUncheckedUpdateInput>
    /**
     * Choose, which DetalleOperacion to update.
     */
    where: DetalleOperacionWhereUniqueInput
  }

  /**
   * DetalleOperacion updateMany
   */
  export type DetalleOperacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleOperacions.
     */
    data: XOR<DetalleOperacionUpdateManyMutationInput, DetalleOperacionUncheckedUpdateManyInput>
    /**
     * Filter which DetalleOperacions to update
     */
    where?: DetalleOperacionWhereInput
    /**
     * Limit how many DetalleOperacions to update.
     */
    limit?: number
  }

  /**
   * DetalleOperacion updateManyAndReturn
   */
  export type DetalleOperacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * The data used to update DetalleOperacions.
     */
    data: XOR<DetalleOperacionUpdateManyMutationInput, DetalleOperacionUncheckedUpdateManyInput>
    /**
     * Filter which DetalleOperacions to update
     */
    where?: DetalleOperacionWhereInput
    /**
     * Limit how many DetalleOperacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleOperacion upsert
   */
  export type DetalleOperacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleOperacion to update in case it exists.
     */
    where: DetalleOperacionWhereUniqueInput
    /**
     * In case the DetalleOperacion found by the `where` argument doesn't exist, create a new DetalleOperacion with this data.
     */
    create: XOR<DetalleOperacionCreateInput, DetalleOperacionUncheckedCreateInput>
    /**
     * In case the DetalleOperacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleOperacionUpdateInput, DetalleOperacionUncheckedUpdateInput>
  }

  /**
   * DetalleOperacion delete
   */
  export type DetalleOperacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
    /**
     * Filter which DetalleOperacion to delete.
     */
    where: DetalleOperacionWhereUniqueInput
  }

  /**
   * DetalleOperacion deleteMany
   */
  export type DetalleOperacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleOperacions to delete
     */
    where?: DetalleOperacionWhereInput
    /**
     * Limit how many DetalleOperacions to delete.
     */
    limit?: number
  }

  /**
   * DetalleOperacion without action
   */
  export type DetalleOperacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleOperacion
     */
    select?: DetalleOperacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleOperacion
     */
    omit?: DetalleOperacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleOperacionInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    tipoUsuario: $Enums.TipoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    tipoUsuario: $Enums.TipoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    password: number
    tipoUsuario: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    tipoUsuario?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
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




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    password: string
    tipoUsuario: $Enums.TipoUsuario
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    tipoUsuario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "password" | "tipoUsuario" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      password: string
      tipoUsuario: $Enums.TipoUsuario
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
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
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
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
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
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
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
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
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly tipoUsuario: FieldRef<"Usuario", 'TipoUsuario'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
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


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    disponible: 'disponible',
    cantidad: 'cantidad'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    correo: 'correo'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const OperacionScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    total: 'total',
    clienteId: 'clienteId'
  };

  export type OperacionScalarFieldEnum = (typeof OperacionScalarFieldEnum)[keyof typeof OperacionScalarFieldEnum]


  export const DetalleOperacionScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    subTotal: 'subTotal',
    productoId: 'productoId',
    operacionId: 'operacionId'
  };

  export type DetalleOperacionScalarFieldEnum = (typeof DetalleOperacionScalarFieldEnum)[keyof typeof DetalleOperacionScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    password: 'password',
    tipoUsuario: 'tipoUsuario',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoDocumento'
   */
  export type EnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento'>
    


  /**
   * Reference to a field of type 'TipoDocumento[]'
   */
  export type ListEnumTipoDocumentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumento[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    disponible?: BoolFilter<"Producto"> | boolean
    cantidad?: IntFilter<"Producto"> | number
    detalleOperaciones?: DetalleOperacionListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    disponible?: SortOrder
    cantidad?: SortOrder
    detalleOperaciones?: DetalleOperacionOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: FloatFilter<"Producto"> | number
    disponible?: BoolFilter<"Producto"> | boolean
    cantidad?: IntFilter<"Producto"> | number
    detalleOperaciones?: DetalleOperacionListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    disponible?: SortOrder
    cantidad?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    disponible?: BoolWithAggregatesFilter<"Producto"> | boolean
    cantidad?: IntWithAggregatesFilter<"Producto"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"Cliente"> | $Enums.TipoDocumento
    numeroDocumento?: StringFilter<"Cliente"> | string
    correo?: StringFilter<"Cliente"> | string
    operaciones?: OperacionListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    correo?: SortOrder
    operaciones?: OperacionOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroDocumento?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    tipoDocumento?: EnumTipoDocumentoFilter<"Cliente"> | $Enums.TipoDocumento
    correo?: StringFilter<"Cliente"> | string
    operaciones?: OperacionListRelationFilter
  }, "id" | "numeroDocumento">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    correo?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    tipoDocumento?: EnumTipoDocumentoWithAggregatesFilter<"Cliente"> | $Enums.TipoDocumento
    numeroDocumento?: StringWithAggregatesFilter<"Cliente"> | string
    correo?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type OperacionWhereInput = {
    AND?: OperacionWhereInput | OperacionWhereInput[]
    OR?: OperacionWhereInput[]
    NOT?: OperacionWhereInput | OperacionWhereInput[]
    id?: IntFilter<"Operacion"> | number
    fecha?: DateTimeFilter<"Operacion"> | Date | string
    total?: FloatNullableFilter<"Operacion"> | number | null
    clienteId?: IntFilter<"Operacion"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    detalleOperaciones?: DetalleOperacionListRelationFilter
  }

  export type OperacionOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    detalleOperaciones?: DetalleOperacionOrderByRelationAggregateInput
  }

  export type OperacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OperacionWhereInput | OperacionWhereInput[]
    OR?: OperacionWhereInput[]
    NOT?: OperacionWhereInput | OperacionWhereInput[]
    fecha?: DateTimeFilter<"Operacion"> | Date | string
    total?: FloatNullableFilter<"Operacion"> | number | null
    clienteId?: IntFilter<"Operacion"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    detalleOperaciones?: DetalleOperacionListRelationFilter
  }, "id">

  export type OperacionOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    _count?: OperacionCountOrderByAggregateInput
    _avg?: OperacionAvgOrderByAggregateInput
    _max?: OperacionMaxOrderByAggregateInput
    _min?: OperacionMinOrderByAggregateInput
    _sum?: OperacionSumOrderByAggregateInput
  }

  export type OperacionScalarWhereWithAggregatesInput = {
    AND?: OperacionScalarWhereWithAggregatesInput | OperacionScalarWhereWithAggregatesInput[]
    OR?: OperacionScalarWhereWithAggregatesInput[]
    NOT?: OperacionScalarWhereWithAggregatesInput | OperacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operacion"> | number
    fecha?: DateTimeWithAggregatesFilter<"Operacion"> | Date | string
    total?: FloatNullableWithAggregatesFilter<"Operacion"> | number | null
    clienteId?: IntWithAggregatesFilter<"Operacion"> | number
  }

  export type DetalleOperacionWhereInput = {
    AND?: DetalleOperacionWhereInput | DetalleOperacionWhereInput[]
    OR?: DetalleOperacionWhereInput[]
    NOT?: DetalleOperacionWhereInput | DetalleOperacionWhereInput[]
    id?: IntFilter<"DetalleOperacion"> | number
    cantidad?: IntFilter<"DetalleOperacion"> | number
    subTotal?: FloatFilter<"DetalleOperacion"> | number
    productoId?: IntFilter<"DetalleOperacion"> | number
    operacionId?: IntFilter<"DetalleOperacion"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    operacion?: XOR<OperacionScalarRelationFilter, OperacionWhereInput>
  }

  export type DetalleOperacionOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    operacion?: OperacionOrderByWithRelationInput
  }

  export type DetalleOperacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleOperacionWhereInput | DetalleOperacionWhereInput[]
    OR?: DetalleOperacionWhereInput[]
    NOT?: DetalleOperacionWhereInput | DetalleOperacionWhereInput[]
    cantidad?: IntFilter<"DetalleOperacion"> | number
    subTotal?: FloatFilter<"DetalleOperacion"> | number
    productoId?: IntFilter<"DetalleOperacion"> | number
    operacionId?: IntFilter<"DetalleOperacion"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    operacion?: XOR<OperacionScalarRelationFilter, OperacionWhereInput>
  }, "id">

  export type DetalleOperacionOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
    _count?: DetalleOperacionCountOrderByAggregateInput
    _avg?: DetalleOperacionAvgOrderByAggregateInput
    _max?: DetalleOperacionMaxOrderByAggregateInput
    _min?: DetalleOperacionMinOrderByAggregateInput
    _sum?: DetalleOperacionSumOrderByAggregateInput
  }

  export type DetalleOperacionScalarWhereWithAggregatesInput = {
    AND?: DetalleOperacionScalarWhereWithAggregatesInput | DetalleOperacionScalarWhereWithAggregatesInput[]
    OR?: DetalleOperacionScalarWhereWithAggregatesInput[]
    NOT?: DetalleOperacionScalarWhereWithAggregatesInput | DetalleOperacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleOperacion"> | number
    cantidad?: IntWithAggregatesFilter<"DetalleOperacion"> | number
    subTotal?: FloatWithAggregatesFilter<"DetalleOperacion"> | number
    productoId?: IntWithAggregatesFilter<"DetalleOperacion"> | number
    operacionId?: IntWithAggregatesFilter<"DetalleOperacion"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    tipoUsuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    tipoUsuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    tipoUsuario?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    disponible?: boolean
    cantidad: number
    detalleOperaciones?: DetalleOperacionCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    disponible?: boolean
    cantidad: number
    detalleOperaciones?: DetalleOperacionUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
    detalleOperaciones?: DetalleOperacionUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
    detalleOperaciones?: DetalleOperacionUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    disponible?: boolean
    cantidad: number
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    nombre: string
    direccion: string
    tipoDocumento?: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
    operaciones?: OperacionCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    tipoDocumento?: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
    operaciones?: OperacionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    operaciones?: OperacionUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    operaciones?: OperacionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    direccion: string
    tipoDocumento?: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type OperacionCreateInput = {
    fecha?: Date | string
    total?: number | null
    cliente: ClienteCreateNestedOneWithoutOperacionesInput
    detalleOperaciones?: DetalleOperacionCreateNestedManyWithoutOperacionInput
  }

  export type OperacionUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    total?: number | null
    clienteId: number
    detalleOperaciones?: DetalleOperacionUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type OperacionUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    cliente?: ClienteUpdateOneRequiredWithoutOperacionesNestedInput
    detalleOperaciones?: DetalleOperacionUpdateManyWithoutOperacionNestedInput
  }

  export type OperacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    clienteId?: IntFieldUpdateOperationsInput | number
    detalleOperaciones?: DetalleOperacionUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type OperacionCreateManyInput = {
    id?: number
    fecha?: Date | string
    total?: number | null
    clienteId: number
  }

  export type OperacionUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OperacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionCreateInput = {
    cantidad: number
    subTotal: number
    producto: ProductoCreateNestedOneWithoutDetalleOperacionesInput
    operacion: OperacionCreateNestedOneWithoutDetalleOperacionesInput
  }

  export type DetalleOperacionUncheckedCreateInput = {
    id?: number
    cantidad: number
    subTotal: number
    productoId: number
    operacionId: number
  }

  export type DetalleOperacionUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetalleOperacionesNestedInput
    operacion?: OperacionUpdateOneRequiredWithoutDetalleOperacionesNestedInput
  }

  export type DetalleOperacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    operacionId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionCreateManyInput = {
    id?: number
    cantidad: number
    subTotal: number
    productoId: number
    operacionId: number
  }

  export type DetalleOperacionUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    operacionId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    password: string
    tipoUsuario: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    tipoUsuario: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    tipoUsuario: $Enums.TipoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DetalleOperacionListRelationFilter = {
    every?: DetalleOperacionWhereInput
    some?: DetalleOperacionWhereInput
    none?: DetalleOperacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DetalleOperacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    disponible?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    disponible?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    disponible?: SortOrder
    cantidad?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    cantidad?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type OperacionListRelationFilter = {
    every?: OperacionWhereInput
    some?: OperacionWhereInput
    none?: OperacionWhereInput
  }

  export type OperacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    correo?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    correo?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    correo?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type OperacionCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
  }

  export type OperacionAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
  }

  export type OperacionMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
  }

  export type OperacionMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
  }

  export type OperacionSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    clienteId?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type OperacionScalarRelationFilter = {
    is?: OperacionWhereInput
    isNot?: OperacionWhereInput
  }

  export type DetalleOperacionCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
  }

  export type DetalleOperacionAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
  }

  export type DetalleOperacionMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
  }

  export type DetalleOperacionMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
  }

  export type DetalleOperacionSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    productoId?: SortOrder
    operacionId?: SortOrder
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    tipoUsuario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DetalleOperacionCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput> | DetalleOperacionCreateWithoutProductoInput[] | DetalleOperacionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutProductoInput | DetalleOperacionCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleOperacionCreateManyProductoInputEnvelope
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
  }

  export type DetalleOperacionUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput> | DetalleOperacionCreateWithoutProductoInput[] | DetalleOperacionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutProductoInput | DetalleOperacionCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleOperacionCreateManyProductoInputEnvelope
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetalleOperacionUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput> | DetalleOperacionCreateWithoutProductoInput[] | DetalleOperacionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutProductoInput | DetalleOperacionCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleOperacionUpsertWithWhereUniqueWithoutProductoInput | DetalleOperacionUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleOperacionCreateManyProductoInputEnvelope
    set?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    disconnect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    delete?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    update?: DetalleOperacionUpdateWithWhereUniqueWithoutProductoInput | DetalleOperacionUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleOperacionUpdateManyWithWhereWithoutProductoInput | DetalleOperacionUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
  }

  export type DetalleOperacionUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput> | DetalleOperacionCreateWithoutProductoInput[] | DetalleOperacionUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutProductoInput | DetalleOperacionCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleOperacionUpsertWithWhereUniqueWithoutProductoInput | DetalleOperacionUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleOperacionCreateManyProductoInputEnvelope
    set?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    disconnect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    delete?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    update?: DetalleOperacionUpdateWithWhereUniqueWithoutProductoInput | DetalleOperacionUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleOperacionUpdateManyWithWhereWithoutProductoInput | DetalleOperacionUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
  }

  export type OperacionCreateNestedManyWithoutClienteInput = {
    create?: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput> | OperacionCreateWithoutClienteInput[] | OperacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OperacionCreateOrConnectWithoutClienteInput | OperacionCreateOrConnectWithoutClienteInput[]
    createMany?: OperacionCreateManyClienteInputEnvelope
    connect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
  }

  export type OperacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput> | OperacionCreateWithoutClienteInput[] | OperacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OperacionCreateOrConnectWithoutClienteInput | OperacionCreateOrConnectWithoutClienteInput[]
    createMany?: OperacionCreateManyClienteInputEnvelope
    connect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
  }

  export type EnumTipoDocumentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoDocumento
  }

  export type OperacionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput> | OperacionCreateWithoutClienteInput[] | OperacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OperacionCreateOrConnectWithoutClienteInput | OperacionCreateOrConnectWithoutClienteInput[]
    upsert?: OperacionUpsertWithWhereUniqueWithoutClienteInput | OperacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OperacionCreateManyClienteInputEnvelope
    set?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    disconnect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    delete?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    connect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    update?: OperacionUpdateWithWhereUniqueWithoutClienteInput | OperacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OperacionUpdateManyWithWhereWithoutClienteInput | OperacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OperacionScalarWhereInput | OperacionScalarWhereInput[]
  }

  export type OperacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput> | OperacionCreateWithoutClienteInput[] | OperacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OperacionCreateOrConnectWithoutClienteInput | OperacionCreateOrConnectWithoutClienteInput[]
    upsert?: OperacionUpsertWithWhereUniqueWithoutClienteInput | OperacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OperacionCreateManyClienteInputEnvelope
    set?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    disconnect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    delete?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    connect?: OperacionWhereUniqueInput | OperacionWhereUniqueInput[]
    update?: OperacionUpdateWithWhereUniqueWithoutClienteInput | OperacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OperacionUpdateManyWithWhereWithoutClienteInput | OperacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OperacionScalarWhereInput | OperacionScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutOperacionesInput = {
    create?: XOR<ClienteCreateWithoutOperacionesInput, ClienteUncheckedCreateWithoutOperacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOperacionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type DetalleOperacionCreateNestedManyWithoutOperacionInput = {
    create?: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput> | DetalleOperacionCreateWithoutOperacionInput[] | DetalleOperacionUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutOperacionInput | DetalleOperacionCreateOrConnectWithoutOperacionInput[]
    createMany?: DetalleOperacionCreateManyOperacionInputEnvelope
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
  }

  export type DetalleOperacionUncheckedCreateNestedManyWithoutOperacionInput = {
    create?: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput> | DetalleOperacionCreateWithoutOperacionInput[] | DetalleOperacionUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutOperacionInput | DetalleOperacionCreateOrConnectWithoutOperacionInput[]
    createMany?: DetalleOperacionCreateManyOperacionInputEnvelope
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutOperacionesNestedInput = {
    create?: XOR<ClienteCreateWithoutOperacionesInput, ClienteUncheckedCreateWithoutOperacionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOperacionesInput
    upsert?: ClienteUpsertWithoutOperacionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutOperacionesInput, ClienteUpdateWithoutOperacionesInput>, ClienteUncheckedUpdateWithoutOperacionesInput>
  }

  export type DetalleOperacionUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput> | DetalleOperacionCreateWithoutOperacionInput[] | DetalleOperacionUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutOperacionInput | DetalleOperacionCreateOrConnectWithoutOperacionInput[]
    upsert?: DetalleOperacionUpsertWithWhereUniqueWithoutOperacionInput | DetalleOperacionUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: DetalleOperacionCreateManyOperacionInputEnvelope
    set?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    disconnect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    delete?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    update?: DetalleOperacionUpdateWithWhereUniqueWithoutOperacionInput | DetalleOperacionUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: DetalleOperacionUpdateManyWithWhereWithoutOperacionInput | DetalleOperacionUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
  }

  export type DetalleOperacionUncheckedUpdateManyWithoutOperacionNestedInput = {
    create?: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput> | DetalleOperacionCreateWithoutOperacionInput[] | DetalleOperacionUncheckedCreateWithoutOperacionInput[]
    connectOrCreate?: DetalleOperacionCreateOrConnectWithoutOperacionInput | DetalleOperacionCreateOrConnectWithoutOperacionInput[]
    upsert?: DetalleOperacionUpsertWithWhereUniqueWithoutOperacionInput | DetalleOperacionUpsertWithWhereUniqueWithoutOperacionInput[]
    createMany?: DetalleOperacionCreateManyOperacionInputEnvelope
    set?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    disconnect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    delete?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    connect?: DetalleOperacionWhereUniqueInput | DetalleOperacionWhereUniqueInput[]
    update?: DetalleOperacionUpdateWithWhereUniqueWithoutOperacionInput | DetalleOperacionUpdateWithWhereUniqueWithoutOperacionInput[]
    updateMany?: DetalleOperacionUpdateManyWithWhereWithoutOperacionInput | DetalleOperacionUpdateManyWithWhereWithoutOperacionInput[]
    deleteMany?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutDetalleOperacionesInput = {
    create?: XOR<ProductoCreateWithoutDetalleOperacionesInput, ProductoUncheckedCreateWithoutDetalleOperacionesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleOperacionesInput
    connect?: ProductoWhereUniqueInput
  }

  export type OperacionCreateNestedOneWithoutDetalleOperacionesInput = {
    create?: XOR<OperacionCreateWithoutDetalleOperacionesInput, OperacionUncheckedCreateWithoutDetalleOperacionesInput>
    connectOrCreate?: OperacionCreateOrConnectWithoutDetalleOperacionesInput
    connect?: OperacionWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutDetalleOperacionesNestedInput = {
    create?: XOR<ProductoCreateWithoutDetalleOperacionesInput, ProductoUncheckedCreateWithoutDetalleOperacionesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetalleOperacionesInput
    upsert?: ProductoUpsertWithoutDetalleOperacionesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetalleOperacionesInput, ProductoUpdateWithoutDetalleOperacionesInput>, ProductoUncheckedUpdateWithoutDetalleOperacionesInput>
  }

  export type OperacionUpdateOneRequiredWithoutDetalleOperacionesNestedInput = {
    create?: XOR<OperacionCreateWithoutDetalleOperacionesInput, OperacionUncheckedCreateWithoutDetalleOperacionesInput>
    connectOrCreate?: OperacionCreateOrConnectWithoutDetalleOperacionesInput
    upsert?: OperacionUpsertWithoutDetalleOperacionesInput
    connect?: OperacionWhereUniqueInput
    update?: XOR<XOR<OperacionUpdateToOneWithWhereWithoutDetalleOperacionesInput, OperacionUpdateWithoutDetalleOperacionesInput>, OperacionUncheckedUpdateWithoutDetalleOperacionesInput>
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoDocumentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoFilter<$PrismaModel> | $Enums.TipoDocumento
  }

  export type NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumento | EnumTipoDocumentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumento[] | ListEnumTipoDocumentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DetalleOperacionCreateWithoutProductoInput = {
    cantidad: number
    subTotal: number
    operacion: OperacionCreateNestedOneWithoutDetalleOperacionesInput
  }

  export type DetalleOperacionUncheckedCreateWithoutProductoInput = {
    id?: number
    cantidad: number
    subTotal: number
    operacionId: number
  }

  export type DetalleOperacionCreateOrConnectWithoutProductoInput = {
    where: DetalleOperacionWhereUniqueInput
    create: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput>
  }

  export type DetalleOperacionCreateManyProductoInputEnvelope = {
    data: DetalleOperacionCreateManyProductoInput | DetalleOperacionCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type DetalleOperacionUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleOperacionWhereUniqueInput
    update: XOR<DetalleOperacionUpdateWithoutProductoInput, DetalleOperacionUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleOperacionCreateWithoutProductoInput, DetalleOperacionUncheckedCreateWithoutProductoInput>
  }

  export type DetalleOperacionUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleOperacionWhereUniqueInput
    data: XOR<DetalleOperacionUpdateWithoutProductoInput, DetalleOperacionUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleOperacionUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleOperacionScalarWhereInput
    data: XOR<DetalleOperacionUpdateManyMutationInput, DetalleOperacionUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleOperacionScalarWhereInput = {
    AND?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
    OR?: DetalleOperacionScalarWhereInput[]
    NOT?: DetalleOperacionScalarWhereInput | DetalleOperacionScalarWhereInput[]
    id?: IntFilter<"DetalleOperacion"> | number
    cantidad?: IntFilter<"DetalleOperacion"> | number
    subTotal?: FloatFilter<"DetalleOperacion"> | number
    productoId?: IntFilter<"DetalleOperacion"> | number
    operacionId?: IntFilter<"DetalleOperacion"> | number
  }

  export type OperacionCreateWithoutClienteInput = {
    fecha?: Date | string
    total?: number | null
    detalleOperaciones?: DetalleOperacionCreateNestedManyWithoutOperacionInput
  }

  export type OperacionUncheckedCreateWithoutClienteInput = {
    id?: number
    fecha?: Date | string
    total?: number | null
    detalleOperaciones?: DetalleOperacionUncheckedCreateNestedManyWithoutOperacionInput
  }

  export type OperacionCreateOrConnectWithoutClienteInput = {
    where: OperacionWhereUniqueInput
    create: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput>
  }

  export type OperacionCreateManyClienteInputEnvelope = {
    data: OperacionCreateManyClienteInput | OperacionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type OperacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: OperacionWhereUniqueInput
    update: XOR<OperacionUpdateWithoutClienteInput, OperacionUncheckedUpdateWithoutClienteInput>
    create: XOR<OperacionCreateWithoutClienteInput, OperacionUncheckedCreateWithoutClienteInput>
  }

  export type OperacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: OperacionWhereUniqueInput
    data: XOR<OperacionUpdateWithoutClienteInput, OperacionUncheckedUpdateWithoutClienteInput>
  }

  export type OperacionUpdateManyWithWhereWithoutClienteInput = {
    where: OperacionScalarWhereInput
    data: XOR<OperacionUpdateManyMutationInput, OperacionUncheckedUpdateManyWithoutClienteInput>
  }

  export type OperacionScalarWhereInput = {
    AND?: OperacionScalarWhereInput | OperacionScalarWhereInput[]
    OR?: OperacionScalarWhereInput[]
    NOT?: OperacionScalarWhereInput | OperacionScalarWhereInput[]
    id?: IntFilter<"Operacion"> | number
    fecha?: DateTimeFilter<"Operacion"> | Date | string
    total?: FloatNullableFilter<"Operacion"> | number | null
    clienteId?: IntFilter<"Operacion"> | number
  }

  export type ClienteCreateWithoutOperacionesInput = {
    nombre: string
    direccion: string
    tipoDocumento?: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
  }

  export type ClienteUncheckedCreateWithoutOperacionesInput = {
    id?: number
    nombre: string
    direccion: string
    tipoDocumento?: $Enums.TipoDocumento
    numeroDocumento: string
    correo: string
  }

  export type ClienteCreateOrConnectWithoutOperacionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutOperacionesInput, ClienteUncheckedCreateWithoutOperacionesInput>
  }

  export type DetalleOperacionCreateWithoutOperacionInput = {
    cantidad: number
    subTotal: number
    producto: ProductoCreateNestedOneWithoutDetalleOperacionesInput
  }

  export type DetalleOperacionUncheckedCreateWithoutOperacionInput = {
    id?: number
    cantidad: number
    subTotal: number
    productoId: number
  }

  export type DetalleOperacionCreateOrConnectWithoutOperacionInput = {
    where: DetalleOperacionWhereUniqueInput
    create: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput>
  }

  export type DetalleOperacionCreateManyOperacionInputEnvelope = {
    data: DetalleOperacionCreateManyOperacionInput | DetalleOperacionCreateManyOperacionInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutOperacionesInput = {
    update: XOR<ClienteUpdateWithoutOperacionesInput, ClienteUncheckedUpdateWithoutOperacionesInput>
    create: XOR<ClienteCreateWithoutOperacionesInput, ClienteUncheckedCreateWithoutOperacionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutOperacionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutOperacionesInput, ClienteUncheckedUpdateWithoutOperacionesInput>
  }

  export type ClienteUpdateWithoutOperacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutOperacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipoDocumento?: EnumTipoDocumentoFieldUpdateOperationsInput | $Enums.TipoDocumento
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleOperacionUpsertWithWhereUniqueWithoutOperacionInput = {
    where: DetalleOperacionWhereUniqueInput
    update: XOR<DetalleOperacionUpdateWithoutOperacionInput, DetalleOperacionUncheckedUpdateWithoutOperacionInput>
    create: XOR<DetalleOperacionCreateWithoutOperacionInput, DetalleOperacionUncheckedCreateWithoutOperacionInput>
  }

  export type DetalleOperacionUpdateWithWhereUniqueWithoutOperacionInput = {
    where: DetalleOperacionWhereUniqueInput
    data: XOR<DetalleOperacionUpdateWithoutOperacionInput, DetalleOperacionUncheckedUpdateWithoutOperacionInput>
  }

  export type DetalleOperacionUpdateManyWithWhereWithoutOperacionInput = {
    where: DetalleOperacionScalarWhereInput
    data: XOR<DetalleOperacionUpdateManyMutationInput, DetalleOperacionUncheckedUpdateManyWithoutOperacionInput>
  }

  export type ProductoCreateWithoutDetalleOperacionesInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    disponible?: boolean
    cantidad: number
  }

  export type ProductoUncheckedCreateWithoutDetalleOperacionesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    disponible?: boolean
    cantidad: number
  }

  export type ProductoCreateOrConnectWithoutDetalleOperacionesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetalleOperacionesInput, ProductoUncheckedCreateWithoutDetalleOperacionesInput>
  }

  export type OperacionCreateWithoutDetalleOperacionesInput = {
    fecha?: Date | string
    total?: number | null
    cliente: ClienteCreateNestedOneWithoutOperacionesInput
  }

  export type OperacionUncheckedCreateWithoutDetalleOperacionesInput = {
    id?: number
    fecha?: Date | string
    total?: number | null
    clienteId: number
  }

  export type OperacionCreateOrConnectWithoutDetalleOperacionesInput = {
    where: OperacionWhereUniqueInput
    create: XOR<OperacionCreateWithoutDetalleOperacionesInput, OperacionUncheckedCreateWithoutDetalleOperacionesInput>
  }

  export type ProductoUpsertWithoutDetalleOperacionesInput = {
    update: XOR<ProductoUpdateWithoutDetalleOperacionesInput, ProductoUncheckedUpdateWithoutDetalleOperacionesInput>
    create: XOR<ProductoCreateWithoutDetalleOperacionesInput, ProductoUncheckedCreateWithoutDetalleOperacionesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetalleOperacionesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetalleOperacionesInput, ProductoUncheckedUpdateWithoutDetalleOperacionesInput>
  }

  export type ProductoUpdateWithoutDetalleOperacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUncheckedUpdateWithoutDetalleOperacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    disponible?: BoolFieldUpdateOperationsInput | boolean
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type OperacionUpsertWithoutDetalleOperacionesInput = {
    update: XOR<OperacionUpdateWithoutDetalleOperacionesInput, OperacionUncheckedUpdateWithoutDetalleOperacionesInput>
    create: XOR<OperacionCreateWithoutDetalleOperacionesInput, OperacionUncheckedCreateWithoutDetalleOperacionesInput>
    where?: OperacionWhereInput
  }

  export type OperacionUpdateToOneWithWhereWithoutDetalleOperacionesInput = {
    where?: OperacionWhereInput
    data: XOR<OperacionUpdateWithoutDetalleOperacionesInput, OperacionUncheckedUpdateWithoutDetalleOperacionesInput>
  }

  export type OperacionUpdateWithoutDetalleOperacionesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    cliente?: ClienteUpdateOneRequiredWithoutOperacionesNestedInput
  }

  export type OperacionUncheckedUpdateWithoutDetalleOperacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionCreateManyProductoInput = {
    id?: number
    cantidad: number
    subTotal: number
    operacionId: number
  }

  export type DetalleOperacionUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    operacion?: OperacionUpdateOneRequiredWithoutDetalleOperacionesNestedInput
  }

  export type DetalleOperacionUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    operacionId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    operacionId?: IntFieldUpdateOperationsInput | number
  }

  export type OperacionCreateManyClienteInput = {
    id?: number
    fecha?: Date | string
    total?: number | null
  }

  export type OperacionUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalleOperaciones?: DetalleOperacionUpdateManyWithoutOperacionNestedInput
  }

  export type OperacionUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    detalleOperaciones?: DetalleOperacionUncheckedUpdateManyWithoutOperacionNestedInput
  }

  export type OperacionUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DetalleOperacionCreateManyOperacionInput = {
    id?: number
    cantidad: number
    subTotal: number
    productoId: number
  }

  export type DetalleOperacionUpdateWithoutOperacionInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetalleOperacionesNestedInput
  }

  export type DetalleOperacionUncheckedUpdateWithoutOperacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleOperacionUncheckedUpdateManyWithoutOperacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
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