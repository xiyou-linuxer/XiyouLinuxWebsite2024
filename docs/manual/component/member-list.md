# 成员列表组件

::: tip
你可以参考 VitePress 官方文档的 [在 Markdown 使用 Vue](https://vitepress.dev/zh/guide/using-vue) 一节。
:::

1. `docs/info/member.md`: 这是一个 Markdown 文件，用于显示项目成员信息。

2. `docs/.vitepress/components/memberData.js`: 这是一个 JavaScript 模块，用于定义成员信息的数据。

## 编写成员信息

要编写或修改成员信息，您可以按照以下步骤进行操作：

1. 打开 `docs/.vitepress/components/memberData.js` 文件。

2. 在该文件中，您会看到两个数组 `g[年份]` ，分别代表 [年份] 级的成员信息。

3. 您可以按照现有的成员信息格式，添加新的成员或修改现有的成员信息。

   - 每个成员以对象的形式表示，包含以下属性：
     - `name`: 成员的姓名。
     - `title`: 成员的职务或头衔（可选）。
     - `github`: 成员的 GitHub 用户名。
     - `linkText`: 显示在链接上的文本（可选）。
     - `link`: 成员的个人博客或网站链接。

   - 例如：
     ```javascript
     { name: '张三', title: '成员', github: 'zhangsan', linkText: '个人博客', link: 'https://example.com' },
     ```

4. 修改完成后保存文件。

## 编写成员信息页面

要编写或修改成员信息页面 (`docs/info/member.md`)，您可以按照以下步骤进行操作：

1. 打开 `docs/info/member.md` 文件。

2. 在该文件中，您会看到两个级别的成员信息部分。

3. 您可以按照现有的格式，使用 Markdown 语法编写或修改成员信息。

   - 每个成员信息部分应包含一个级别的标题（例如 `## 2023 级`）和一个 `<MemberList>` 组件。

   - 您可以在 `<MemberList>` 组件中传递相应级别的成员数据。

     例如：
     ```markdown
     <MemberList :data="memberData.g2023" />
     ```

4. 修改完成后保存文件。
