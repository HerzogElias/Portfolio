export interface Projekt {
    projectname: string;
    content: {
      aboutTheProject: string;
      organisation: string;
      whatILearned: string;
    };
    technologies: string[];
    images: string[];    
    github: string;
    livetest: string; 
  }