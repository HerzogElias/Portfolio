export interface Projekt {
    projectname: string;
    technologies:string;
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