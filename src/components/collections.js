
import { FileOutlined, FolderOutlined } from '@ant-design/icons';
import CollectionList from "../configs/collections";

const Collections = () => {
    const DataCollections = CollectionList.map((data) => {
        const key = data.id || "";
        if(!data.pages) {
          return;
        }
        return {
          key: key,
          icon: (<FolderOutlined/>),
          label: data.name || "",
          children: data.pages.map((pageData, j) => {
            const subKey = pageData.id || "";
            return {
              key: subKey,
              label: pageData.name || "",
              icon: (<FileOutlined/>)
            };
          }),
        };
      });

      return DataCollections
};

export default Collections;