export interface Projekt {
    projectname: string;
    content: {
      aboutTheProject: string;
      organisation: string;
      whatILearned: string;
    };
    images: string[];    
    imageProject:string[],
    github: string;
    livetest: string; 
  }