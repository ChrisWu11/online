<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true"
      >新增数据</el-button
    >

    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addLists"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="createdAt" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="author" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
import { getBlogList,addBlogs ,deleteBlogs} from "@/api";
export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        autor: "",
        title: "",
        content: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    deleteRow(index, rows) {
      let {id,author} = rows[index];
      this.deleteLists({id,author});
      this.getList();
    },
    async getList() {
      let { data } = await getBlogList();
      this.tableData = data.data;
      // console.log(data);
    },
    async addLists(){
      this.dialogFormVisible = false;
      let result = await addBlogs(this.form);
      this.getList();
      console.log(result);
    },
    async deleteLists(params){
      let result = await deleteBlogs(params);
      console.log(result);
    }
  },
  created() {
    this.$nextTick(() => {
      this.getList();
    });
  },
};
</script>