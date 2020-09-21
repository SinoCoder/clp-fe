<template>
  <div class="ide-container">
    <div class="ide-toolbar">
      <el-dropdown
        type="info"
        size="medium"
        @command="handleLanguageChange"
        split-button
      >
        {{ currentLang }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="lang in languageMode"
            :key="lang.name"
            :command="lang.path"
            >{{ lang.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown
        type="info"
        size="medium"
        @command="handleFontSizeChange"
        split-button
      >
        {{ fontSize + "px" }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="size in fontSizes"
            :key="size"
            :command="size"
          >
            {{ size + "px" }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="ace-container">
      <div class="ace-editor" ref="ace"></div>
    </div>
  </div>
</template>

<script>
import ace from "ace-builds";
import "ace-builds/webpack-resolver"; // 在 webpack 环境中使用必须要导入
import "ace-builds/src-min-noconflict/theme-monokai"; // 默认设置的主题
import "ace-builds/src-min-noconflict/mode-c_cpp"; // 默认设置的语言模式
import "ace-builds/src-min-noconflict/mode-java";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/snippets/c_cpp";
import "ace-builds/src-min-noconflict/snippets/java";
import "ace-builds/src-min-noconflict/snippets/python";
import "ace-builds/src-min-noconflict/snippets/javascript";
var clipMode = [
  {
    name: "C/C++",
    path: "ace/mode/c_cpp"
  },
  {
    name: "C#",
    path: "ace/mode/csp"
  },
  {
    name: "Java",
    path: "ace/mode/java"
  },
  {
    name: "Kotlin",
    path: "ace/mode/kotlin"
  },
  {
    name: "Python",
    path: "ace/mode/python"
  },
  {
    name: "Javascript",
    path: "ace/mode/javascript"
  },
  {
    name: "PHP",
    path: "ace/mode/php"
  },
  {
    name: "SQL",
    path: "ace/mode/sql"
  }
];
var submitMode = [
  {
    name: "C/C++",
    path: "ace/mode/c_cpp"
  },
  {
    name: "Java",
    path: "ace/mode/java"
  }
];
export default {
  mounted() {
    this.aceEditor = ace.edit(this.$refs.ace, {
      maxLines: 80, // 最大行数，超过会自动出现滚动条
      minLines: 30, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      fontSize: 14, // 编辑器内字体大小
      theme: this.themePath, // 默认设置的主题
      mode: this.modePath, // 默认设置的语言模式
      tabSize: 4 // 制表符设置为 4 个空格大小
    });
    this.aceEditor.getSession().on("change", this.change);
    if (this.type == "submit") {
      this.languageMode = submitMode;
    } else {
      this.languageMode = clipMode;
    }
    this.refreshTheme();
  },
  data() {
    return {
      aceEditor: {},
      themePath: "ace/theme/monokai", // 不导入 webpack-resolver，该模块路径会报错
      modePath: "ace/mode/c_cpp", // 同上
      sign: false,
      fontSize: 14,
      fontSizes: [6, 8, 10, 12, 14, 16, 18, 20, 22],
      languageMode: [],
      themes: {
        dark: "ace/theme/monokai",
        light: "ace/theme/github"
      }
    };
  },
  methods: {
    change() {
      this.$emit("input", this.aceEditor.getSession().getValue());
    },
    handleLanguageChange(value) {
      this.modePath = value;
      console.log(value);
    },
    refreshTheme() {
      if (this.theme == "dark") {
        this.aceEditor.setTheme(this.themes.dark);
      } else if (this.theme == "light") {
        this.aceEditor.setTheme(this.themes.light);
      } else {
        this.aceEditor.setTheme(this.theme);
      }
    },
    handleFontSizeChange(value) {
      this.fontSize = value;
      this.aceEditor.setFontSize(value);
    }
  },
  computed: {
    currentLang() {
      for (let i = 0; i < this.languageMode.length; i++) {
        if (this.languageMode[i].path == this.modePath) {
          return this.languageMode[i].name;
        }
      }
      return "选择语言";
    }
  },
  props: {
    value: String,
    type: String,
    theme: String
  },
  watch: {
    modePath: function() {
      this.aceEditor.session.setMode(this.modePath);
    },
    theme: function() {
      this.refreshTheme();
    },
    value: function() {
      if (this.sign === false) {
        this.aceEditor.session.setValue(this.value);
        this.sign = true;
      }
    }
  }
};
</script>

<style scoped>
.ide-toolbar {
  margin: 20px 0 15px;
}

.el-dropdown {
  margin-right: 10px;
}

.ace-container {
  border-radius: 5px;
  overflow: hidden;
  max-width: 900px;
}
</style>
