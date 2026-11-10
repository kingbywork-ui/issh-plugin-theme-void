// 插件侧类型已收敛为 Gateway SDK 的 type-only re-export：插件不安装依赖，
// 按目录深度（src → 插件目录 → plugins → 仓库根）相对引用 SDK 类型。
// 原 SettingsTabDefinition 的 component?: unknown 收敛为 SDK 的 Component 变体；
// 插件仅使用 mount 入口，不受影响。
export type {
    IsshPlugin,
    IsshPluginContext,
    IsshPluginManifest,
    PluginStorage,
    SettingsTabDefinition,
    Terminal,
} from '../../../packages/issh-gateway/src/types'
