<template>
  <div class="container" ref="container"></div>
</template>

<script>
  import LogicFlow from "@logicflow/core";
  import "@logicflow/core/lib/style/index.css";

  export default {
    name: 'lf-Demo',
    data() {
        return {
        lf: null,
        renderData: {
          // 节点数据
          nodes: [
            {
              id: '21', // 节点ID，需要全局唯一，不传入内部会自动生成一个ID
              type: 'rect', // 节点类型，可以传入LogicFlow内置的7种节点类型，也可以注册自定义节点后传入自定义类型
              x: 100, // 节点形状中心在x轴位置
              y: 100, // 节点形状中心在y轴的位置
              text: 'Origin Usage-rect', // 节点文本
              properties: { // 自定义属性，用于存储需要这个节点携带的信息，可以传入宽高以重设节点的宽高
                width: 160,
                height: 80,
              }
            },
            {
              id: '50',
              type: 'circle',
              x: 300,
              y: 300,
              text: 'Origin Usage-circle',
              properties: {
                r: 60,
              }
            },
          ],
          // 边数据
          edges: [
            {
              id: 'rect-2-circle', // 边ID，性质与节点ID一样
              type: 'polyline', // 边类型
              sourceNodeId: '50', // 起始节点Id
              targetNodeId: '21', // 目标节点Id
            },
          ],
        }
      }
    },
    mounted() {
        this.initLogicFlow() 
    },
  
    methods: {
    initLogicFlow() {
      // 2. 确保DOM容器已挂载 
      const container = this.$refs.container  
      if (!container) return 
      
      // 3. 使用this.renderData 访问数据 
      this.lf  = new LogicFlow({
        container,
        grid: true 
      })
      
      this.lf.render(this.renderData)  
      
      // 4. 添加调试代码验证数据 
      console.log(' 渲染数据:', this.renderData) 
    }
    },
    beforeDestroy() {
        // 5. 清理逻辑 
        if (this.lf)  {
        this.lf.destroy() 
        }
    }
};
</script>

<style scoped>
  .container {
    width:100%;
    height: 500px;
    border:1px solid red;
  }
</style>