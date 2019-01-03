## mobx-2

### Demonstrate mobx issue with spfx


### to repro on your own

1. Scaffold a new spfx web part using React.
2. npm install mobx mobx-react
3. add `import {observable} from 'mobx';` to the component or any TypeScript file
4. gulp bundle --ship


will produce:

[09:01:06] Using gulpfile ~\code\delete-me\mobx2\gulpfile.js
[09:01:06] Starting gulp
[09:01:07] Starting 'bundle'...
[09:01:07] Starting subtask 'configure-sp-build-rig'...
[09:01:07] Finished subtask 'configure-sp-build-rig' after 5.61 ms
[09:01:07] Starting subtask 'pre-copy'...
[09:01:07] Finished subtask 'pre-copy' after 43 ms
[09:01:07] Starting subtask 'copy-static-assets'...
[09:01:07] Starting subtask 'sass'...
[09:01:07] Finished subtask 'copy-static-assets' after 36 ms
[09:01:07] Finished subtask 'sass' after 138 ms
[09:01:07] Starting subtask 'tslint'...
[09:01:07] [tslint] tslint version: 5.9.1
[09:01:07] Starting subtask 'tsc'...
[09:01:07] [tsc] typescript version: 2.4.2
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,23): error TS1110: Type expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,30): error TS1138: Parameter declaration expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,43): error TS1005: ';' expected.[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,44): error TS1128: Declaration or statement expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(8,1): error TS1128: Declaration or statement expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(8,3): error TS1109: Expression expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(9,24): error TS1005: ',' expected.[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(10,26): error TS1005: ',' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(11,22): error TS1005: ',' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,31): error TS1110: Type expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,38): error TS1138: Parameter declaration expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,51): error TS1005: ':' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,52): error TS1136: Property assignment expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,60): error TS1005: ':' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(13,22): error TS1005: ',' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/core/atom.d.ts(3,36): error TS1005: '=' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/utils/decorators.d.ts(1,63): error TS1005: '=' expected.
[09:01:09] Error - [tsc] node_modules/mobx/lib/utils/decorators.d.ts(2,52): error TS1005: '=' expected.
[09:01:09] Error - 'tsc' sub task errored after 1.85 s
 exited with code 2
[09:01:09] 'bundle' errored after 2.15 s
[09:01:09]
[09:01:09] ==================[ Finished ]==================
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,23): error TS1110: Type expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,30): error TS1138: Parameter declaration expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,43): error TS1005: ';' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(4,44): error TS1128: Declaration or statement expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(8,1): error TS1128: Declaration or statement
expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(8,3): error TS1109: Expression expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(9,24): error TS1005: ',' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(10,26): error TS1005: ',' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(11,22): error TS1005: ',' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,31): error TS1110: Type expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,38): error TS1138: Parameter declaration expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,51): error TS1005: ':' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,52): error TS1136: Property assignment expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(12,60): error TS1005: ':' expected.
Error - [tsc] node_modules/mobx/lib/api/actiondecorator.d.ts(13,22): error TS1005: ',' expected.
Error - [tsc] node_modules/mobx/lib/core/atom.d.ts(3,36): error TS1005: '=' expected.
Error - [tsc] node_modules/mobx/lib/utils/decorators.d.ts(1,63): error TS1005: '=' expected.
Error - [tsc] node_modules/mobx/lib/utils/decorators.d.ts(2,52): error TS1005: '=' expected.
Error - 'tsc' sub task errored after 1.85 s
 exited with code 2
[09:01:09] Finished subtask 'tslint' after 2.47 s
[09:01:10] Project mobx-2 version:0.0.1
[09:01:10] Build tools version:3.8.33
[09:01:10] Node version:v8.12.0
[09:01:10] Total duration:6.53 s
[09:01:10] Task errors:19



### Update

here's the fix: 
`npm install --save-dev mobx@3.6.2 mobx-react@4.4.3'

https://github.com/SharePoint/sp-dev-docs/issues/3196

