import {mountAIReview} from '../bts/review.js';
const evidence={
  "space": {
    "en": {
      "part": "Design, computational analysis and visual communication within collaborative Bates Smart project teams. The material here shows massing, solar, façade and tower-form studies; it does not imply sole authorship of the buildings.",
      "result": "Three professional projects are presented with original drawings and model imagery. The Denmark submission reports winter solar access for 90% of residences.",
      "note": "Submission result for the team proposal, not a personal productivity metric."
    },
    "zh": {
      "part": "在 Bates Smart 团队项目中参与设计、计算分析和视觉表达。这里选出体量、日照、立面与塔楼形态研究，不将整栋建筑归为个人独立设计。",
      "result": "展示三个专业项目的原始图纸和模型资料。Denmark 方案文件记录，90% 的住宅可获得冬季直接日照。",
      "note": "这是团队方案的提交结果，不是个人效率数据。"
    }
  },
  "system": {
    "en": {
      "part": "Information architecture, interface design and front-end prototyping for Studio Library; spatial data and browser-interface work for the Melbourne City Model.",
      "result": "Studio Library is being deployed for an initial rollout to colleagues in the Melbourne office. The City Model currently covers metropolitan Melbourne and Sydney CBD.",
      "note": "Rollout is in progress. The public Studio Library demo uses fictionalised resources."
    },
    "zh": {
      "part": "Studio Library 的信息架构、界面设计与前端原型；Melbourne City Model 的空间数据与浏览器界面工作。",
      "result": "Studio Library 正在部署，先面向墨尔本办公室的同事试用。City Model 目前覆盖墨尔本大都会区和悉尼 CBD。",
      "note": "目前处于部署和试用阶段。公开 Studio Library 演示使用示例资源。"
    }
  },
  "code": {
    "en": {
      "part": "Develop and edit Grasshopper/Python workflows and internal tools. For 435 Bourke, resolve the curved façade into individual PV-panel geometry for design development and documentation.",
      "result": "Rhino Tabs is automatically delivered to architects' computers, reducing the need to ask colleagues where to find tools and information. The façade case shows the PV-panel generation workflow.",
      "note": "The time benefit is qualitative; no per-task timing is claimed."
    },
    "zh": {
      "part": "建立和修改 Grasshopper/Python 工作流及内部工具。在 435 Bourke 项目中，将曲面立面处理为独立 PV 面板几何，供设计深化与施工图使用。",
      "result": "Rhino Tabs 自动下发到建筑师的电脑，减少查找工具与信息时的来回沟通。立面案例展示实际 PV 面板生成工作流。",
      "note": "节省时间目前为定性描述，不填写未经记录的分钟数。"
    }
  },
  "observation": {
    "en": {
      "part": "Photography, selection and sequencing. I decide which images stay, which repeat an existing idea and how adjacent frames change the reading.",
      "result": "Nineteen selected photographs are arranged into an authored sequence rather than a chronological archive.",
      "note": "This is a curated output count, not a reach or engagement claim."
    },
    "zh": {
      "part": "拍摄、选片与排序。判断哪些照片值得留下，哪些在重复，以及相邻画面怎样改变观看方式。",
      "result": "十九张精选照片被重新组织成有节奏的序列，而不是按年份排列的存档。",
      "note": "这是整理后的作品数量，不是传播或互动数据。"
    }
  },
  "research": {
    "en": {
      "part": "Research, computational design and visualisation during my UNSW Computational Design degree. The 2026 browser reconstruction is a separate AI-assisted portfolio implementation.",
      "result": "TODAI connects urban inputs, parametric generation, optimisation and H2O/XGBoost prediction. The public reconstruction can calculate and compare walking routes and floor area.",
      "note": "Historical TODAI uses supervised ML. The browser demonstration uses schematic data and does not reproduce the original trained model."
    },
    "zh": {
      "part": "在 UNSW Computational Design 本科学习期间完成研究、计算设计与可视化工作。2026 年的浏览器重建是另一次 AI 辅助作品集实现。",
      "result": "TODAI 将城市输入、参数化生成、优化与 H2O/XGBoost 预测连接起来。公开重建能够实际计算和比较步行路径与建筑面积。",
      "note": "原始 TODAI 使用监督学习。浏览器演示使用示意数据，不复现原始训练模型。"
    }
  }
};
export function applyProjectEvidence(category,language){
 const root=document.getElementById('projectAccountability');
 if(!root||!evidence[category])return;
 if(category==='research')document.querySelector('#todaiProject .todai-title')?.after(root);
 else document.querySelector('#project .story-grid')?.after(root);
 const d=evidence[category][language==='zh'?'zh':'en'];
 root.replaceChildren();
 for(const [key,title] of [['part',language==='zh'?'我的工作':'MY PART'],['result',language==='zh'?'具体产出':'CONCRETE RESULT']]){
  const group=document.createElement('div'),h=document.createElement('h2'),p=document.createElement('p');
  h.textContent=title;p.textContent=d[key];group.append(h,p);
  if(key==='result'){const small=document.createElement('small');small.textContent=d.note;group.append(small);}
  root.append(group);
 }
 const review=document.getElementById('aiReviewProject');
 if(review){review.hidden=category!=='code';if(category==='code')mountAIReview(review);}
}
