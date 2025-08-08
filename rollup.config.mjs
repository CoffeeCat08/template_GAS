import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2'; // ← 変更
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const extensions = ['.ts', '.js'];

const preventTreeShakingPlugin = () => {
  return {
    name: 'no-treeshaking',
    resolveId(id, importer) {
      if (!importer) {
        return { id, moduleSideEffects: 'no-treeshake' };
      }
      return null;
    },
  };
};

export default {
  input: './src/index.ts',
  output: {
    dir: process.env.ROLLUP_OUTPUT_DIR || './dist/',
    format: 'esm',
  },
  plugins: [
    preventTreeShakingPlugin(),
    nodeResolve({
      extensions,
      modulesOnly: false,
      moduleDirectories: ['node_modules'], // これで十分
    }),
    typescript({ tsconfig: './tsconfig.json', clean: true }),
    babel({ extensions, babelHelpers: 'runtime' }),
  ],
};
