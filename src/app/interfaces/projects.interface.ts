export interface Projekt {
    projectname: string;
    content: {
      aboutTheProject: string;
      organisation: string;
      whatILearned: string;
    };
    images: string[];    
    github: string;
    livetest: string; 
  }