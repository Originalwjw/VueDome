function addChildrenToDir(rootTreeDir, dir_path, childrenData) {
  // 分割路径
  const pathParts = dir_path.split("/").filter((part) => part !== "");

  // 辅助函数用于递归查找目录
  function findAndAddChildren(dirs, parts) {
    if (parts.length === 0) return;

    const currentPart = parts.shift();
    let targetDir = dirs.find((item) => item.name === currentPart);

    if (!targetDir) {
      console.warn(
        `Directory "${currentPart}" not found or is not a valid directory.`
      );
      return;
    }

    if (parts.length === 0) {
      // 如果这是最后一级路径，则添加子项
      if (!Array.isArray(targetDir.children)) {
        targetDir.children = [];
      }
      targetDir.children = [...targetDir.children, ...childrenData];
    } else {
      // 否则继续深入查找
      if (!Array.isArray(targetDir.children)) {
        targetDir.children = [];
      }
      findAndAddChildren(targetDir.children, parts);
    }
  }

  findAndAddChildren(rootTreeDir, pathParts);

  return rootTreeDir;
}

// 示例数据
let rootTreeDir = [
  {
    name: "Optics",
    is_dir: true,
    children: [],
  },
  {
    name: "test_sync",
    is_dir: true,
    children: [
      {
        name: "Diverging shift current responses in the gapless limit of two-dimensional systems.pdf",
        is_dir: false,
      },
      {
        name: "test",
        is_dir: true,
      },
    ],
  },
];

let test_sync = [
  {
    name: "Diverging shift current responses in the gapless limit of two-dimensional systems.pdf",
    is_dir: false,
  },
  {
    name: "test",
    is_dir: true,
  },
];

let test = [
  {
    name: "new_file_in_test_folder.txt",
    is_dir: false,
  },
  {
    name: "another_subfolder",
    is_dir: true,
  },
];

let dir_path = "test_sync/test";

// 调用函数
const updatedTree = addChildrenToDir(rootTreeDir, dir_path, test);

// 输出结果
console.log(JSON.stringify(updatedTree, null, 2));
