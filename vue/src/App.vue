<template>
  <main>
    <div class="btn-group">
      <button @click="editorData" :disabled="change.active">데이터</button>
      <button @click="editorClear" :disabled="change.active">초기화</button>
      <button @click="editorChange">{{ change.txt }}</button>
    </div>
    <div id="editorjs"></div>
  </main>
</template>

<script>
import EditorJS from '@/editor/index'
import data from '@/editor/data'
export default {
  name: 'App',
  data() {
    return {
      change: {txt: '저장',active: false}
    }
  },
  methods: {
    editorData() {
      EditorJS.render(data)
    },
    editorClear() {
      EditorJS.clear()
    },
    editorChange() {
      if(EditorJS.readOnly.isEnabled) {
        EditorJS.readOnly.toggle()
        this.change = {txt: '저장', active: false }
      } else {
        EditorJS.save().then((data) => {
          if(data.blocks.length > 0) {
            EditorJS.readOnly.toggle()
            this.change = {txt: '수정', active: true }
          }
        }).catch((error) => console.log(error))
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #FFF;
}
main {
  margin-top: 20px;
  padding: 0 50px;

  #editorjs {
    margin: 20px 10% 100px 10%;
    width: 80%;
    min-height: 40vh;

    textarea {
      resize: none;
    }
    .ce-block__content {
      max-width: 100% !important;
      padding: 0 20px;
    }
    .ce-toolbar__content {
      max-width: 100% !important;
    }
    .codex-editor__redactor {
      padding-bottom: 0 !important;
      margin-right: 0 !important;
    }
  }
  .btn-group {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: calc(100% - ((10% - 10px) * 2));
    margin: 10px calc(10% - 10px);

    button {
      width: calc((100% / 3) - 20px);
      border: none;
      cursor: pointer;
      padding: 15px 0;
      margin: 0 10px;

      &:hover {
        color: #42b883;
        font-weight: bold;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

@media (max-width: 1000px) {
  main {
    padding: 0 40px;

    #editorjs {
      width: calc(100% - 40px);
      margin: 10px 20px;
    }
    .btn-group {
      width: calc(100% - 20px);
      margin: 10px;
    }
  }
}

@media (max-width: 650px) {
  main {
    padding: 0 20px;

    #editorjs {
      width: calc(100% - 20px);
      margin: 10px 10px 50px 10px;
    }
    .btn-group {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>
