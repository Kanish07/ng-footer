import { chain, noop, Rule, Tree } from '@angular-devkit/schematics';
import {
  addModuleImportToRootModule,
  getProjectFromWorkspace,
  getWorkspace,
  ProjectType,
  WorkspaceProject
} from 'schematics-utilities';

function addModuleToImports(options: any): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const moduleName = 'NgFooterModule';
    addModuleImportToRootModule(host, moduleName, 'ng-footer', project as WorkspaceProject<ProjectType.Application>);
    return host;
  };
}

export default function(options: any): Rule {
  return chain([
    options && options.skipModuleImport ? noop() : addModuleToImports(options),
  ]);
}