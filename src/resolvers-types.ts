import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum BloodType {
  A = 'A',
  Ab = 'AB',
  B = 'B',
  O = 'O'
}

export type Equipment = {
  __typename?: 'Equipment';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  new_or_used?: Maybe<Scalars['String']['output']>;
  used_by?: Maybe<Scalars['String']['output']>;
};

export type Given = Equipment | Supply;

export type Mutation = {
  __typename?: 'Mutation';
  deleteEquipment?: Maybe<Equipment>;
  deleteSupply?: Maybe<Supply>;
};


export type MutationDeleteEquipmentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteSupplyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum NewOrUsed {
  New = 'new',
  Used = 'used'
}

export type People = {
  __typename?: 'People';
  blood_type: BloodType;
  first_name: Scalars['String']['output'];
  from: Scalars['String']['output'];
  givens?: Maybe<Array<Maybe<Given>>>;
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  role: Role;
  serve_years: Scalars['Int']['output'];
  sex: Sex;
  team: Scalars['ID']['output'];
  tools?: Maybe<Array<Maybe<Tool>>>;
};

export type Query = {
  __typename?: 'Query';
  equipments?: Maybe<Array<Maybe<Equipment>>>;
  people?: Maybe<Array<Maybe<People>>>;
  person?: Maybe<People>;
  roles?: Maybe<Array<Maybe<RoleInfo>>>;
  softwares?: Maybe<Array<Maybe<Software>>>;
  supplies?: Maybe<Array<Maybe<Supply>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
};


export type QueryPeopleArgs = {
  blood_type?: InputMaybe<BloodType>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  sex?: InputMaybe<Sex>;
  team?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Designer = 'designer',
  Developer = 'developer',
  Planner = 'planner'
}

export type RoleInfo = {
  __typename?: 'RoleInfo';
  equipments?: Maybe<Array<Maybe<Equipment>>>;
  id: Scalars['ID']['output'];
  job: Scalars['String']['output'];
  members?: Maybe<Array<Maybe<People>>>;
  requirement?: Maybe<Scalars['String']['output']>;
  softwares?: Maybe<Array<Maybe<Software>>>;
};

export enum Sex {
  Female = 'female',
  Male = 'male'
}

export type Software = {
  __typename?: 'Software';
  description?: Maybe<Scalars['String']['output']>;
  developed_by: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  used_by: Role;
};

export type Supply = {
  __typename?: 'Supply';
  id: Scalars['String']['output'];
  team: Scalars['Int']['output'];
};

export type Team = {
  __typename?: 'Team';
  cleaning_duty?: Maybe<Scalars['String']['output']>;
  extension_number?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  mascot?: Maybe<Scalars['String']['output']>;
  office?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Scalars['String']['output']>;
  supplies?: Maybe<Array<Maybe<Supply>>>;
};

export type Tool = {
  id: Scalars['ID']['output'];
  used_by: Role;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Given: ( Equipment ) | ( Supply );
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Tool: never;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BloodType: BloodType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Equipment: ResolverTypeWrapper<Equipment>;
  Given: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Given']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NewOrUsed: NewOrUsed;
  People: ResolverTypeWrapper<Omit<People, 'givens'> & { givens?: Maybe<Array<Maybe<ResolversTypes['Given']>>> }>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  RoleInfo: ResolverTypeWrapper<RoleInfo>;
  Sex: Sex;
  Software: ResolverTypeWrapper<Software>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Supply: ResolverTypeWrapper<Supply>;
  Team: ResolverTypeWrapper<Team>;
  Tool: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Tool']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Equipment: Equipment;
  Given: ResolversUnionTypes<ResolversParentTypes>['Given'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  People: Omit<People, 'givens'> & { givens?: Maybe<Array<Maybe<ResolversParentTypes['Given']>>> };
  Query: {};
  RoleInfo: RoleInfo;
  Software: Software;
  String: Scalars['String']['output'];
  Supply: Supply;
  Team: Team;
  Tool: ResolversInterfaceTypes<ResolversParentTypes>['Tool'];
}>;

export type EquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Equipment'] = ResolversParentTypes['Equipment']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  new_or_used?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  used_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GivenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Given'] = ResolversParentTypes['Given']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Equipment' | 'Supply', ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deleteEquipment?: Resolver<Maybe<ResolversTypes['Equipment']>, ParentType, ContextType, Partial<MutationDeleteEquipmentArgs>>;
  deleteSupply?: Resolver<Maybe<ResolversTypes['Supply']>, ParentType, ContextType, Partial<MutationDeleteSupplyArgs>>;
}>;

export type PeopleResolvers<ContextType = any, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = ResolversObject<{
  blood_type?: Resolver<ResolversTypes['BloodType'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givens?: Resolver<Maybe<Array<Maybe<ResolversTypes['Given']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  serve_years?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sex?: Resolver<ResolversTypes['Sex'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tools?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tool']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  equipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Equipment']>>>, ParentType, ContextType>;
  people?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType, Partial<QueryPeopleArgs>>;
  person?: Resolver<Maybe<ResolversTypes['People']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'id'>>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleInfo']>>>, ParentType, ContextType>;
  softwares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Software']>>>, ParentType, ContextType>;
  supplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Supply']>>>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
}>;

export type RoleInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleInfo'] = ResolversParentTypes['RoleInfo']> = ResolversObject<{
  equipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Equipment']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  requirement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  softwares?: Resolver<Maybe<Array<Maybe<ResolversTypes['Software']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SoftwareResolvers<ContextType = any, ParentType extends ResolversParentTypes['Software'] = ResolversParentTypes['Software']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  developed_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  used_by?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SupplyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Supply'] = ResolversParentTypes['Supply']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  cleaning_duty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extension_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mascot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Supply']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ToolResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tool'] = ResolversParentTypes['Tool']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  used_by?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Equipment?: EquipmentResolvers<ContextType>;
  Given?: GivenResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoleInfo?: RoleInfoResolvers<ContextType>;
  Software?: SoftwareResolvers<ContextType>;
  Supply?: SupplyResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Tool?: ToolResolvers<ContextType>;
}>;

