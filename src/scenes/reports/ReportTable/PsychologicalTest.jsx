import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const data = [
  {
    // title: "Chandaria School of Business",
    sections: [
      {
        // title: "Undergraduate",
        majors: [
          {
            major: "Anxiety",
            tool: "Beck’s Anxiety Inventory (BAI)",
            male: 1,
            female: 13,
            total: 14,
          },
          {
            // major: "Depression",
            tool: "Social Interaction anxiety scale",
            male: 2,

            female: 12,
            total: 14,
          },
          {
            major: "Depression",
            tool: "Beck’s Depression Inventory (BDI-2)",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Finance",
            tool: "Mood Disorder Questionnaire",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Hotel and Restaurant Management",
            tool: "Beck’s Hopelessness Survey",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Emotions",
            tool: "How are you feeling today?",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Emotions",
            tool: "Daily Mood Chart",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Emotions",
            tool: "Wheel of Feelings (Learn how to Label your feelings)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Stress",
            tool: "How Vulnerable are you to Stress",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Emotions",
            tool: "Quick tips for Managing Stress",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Emotions",
            tool: "Personal Distress Assessment",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Trauma",
            tool: "Lancashire Traumatic check list –PCL-5",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Emotions",
            tool: "Adverse Childhood Experiences (ACE) Questionnaire",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Thought Problems",
            tool: "Cognitive distortions",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Attention Problems",
            tool: "Adult ADHD Self report Scale (ASRS) Symptom Checklist",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Life skills",
            tool: "Time management",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Time Management tips",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Time Management Survey",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Am I assertive",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Am I assertive",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Personal Goal Setting",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Attention Problems",
            tool: "Steps for Problem solving",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            // major: "Attention Problems",
            tool: "Money Management – What Kind of a Spender Are You? ",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            // major: "Attention Problems",
            tool: "Value Clarification",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Wellness",
            tool: " Health Assessment",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Substance use Disorder",
            tool: "Short Michigan Alcohol Screening Test (SMAST)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Alcohol Smoking & Substance involvement screening test (ASSIST)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Alcohol Screen",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Modified ASSIST",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "The Alcohol Use Disorder Identification Test (AUDIT)- Self Report  Version",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "The CAGE Test for Alcohol Addiction",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "How to Quit Smoking",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Cannabis Use Disorder Identification Test (AUDIT)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Test your knowledge of Alcohol and Drug Abuse",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: " Self-awareness",
            tool: "SWOT Analysis Worksheet (Mind Tools)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "My Strengths and Qualities by TherapistAid.com",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Strengths and Weaknesses",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Wheel of Life",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Check you Scores on Self care",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Check you Scores on Self care",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Self-esteem",
            tool: "Sorensen self-esteem test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Rosenberg self-esteem scale",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Rate Your self-esteem",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Self Esteem Assessment",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Personal Self Esteem",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Sentence Completion Test- Adult",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Sentence Completion Test (Robin Hedderly)",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Personality Test",
            tool: "Jung’s typology - personality test –online  based on Carl Jung and Myers Briggs (MBTI)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Keirsey Sorter Temperament test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "What is your Temperament Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Enneagram personality test – Bear Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Dalai Larma Personality test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Birth Month- Personality Assessment",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "The Big-Five Personality Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "The Temperament",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Academic Performance Issues",
            tool: "Jung’s typology - personality test –online  based on Carl Jung and Myers Briggs (MBTI)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Relationship Problems",
            tool: "Love Attitude Scale",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "The Five Love Language for couples",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Love Language Personal Profile",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Relationship Communication Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Marriage Quiz for Couples",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Is She the Perfect Girlfriend",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Is He Your Guy",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "How Healthy is your Relationship (for marital and Serious relationships only)",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Social Problems",
            tool: "Social Interaction Anxiety",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Autism the AQ Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Assertiveness Test",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "What is your Attachment style",
            tool: "Assertiveness Test",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Behavioral Problems",
            tool: "Action Brainstorming Worksheet",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            tool: "Behavioral Self-Assessment Questions (Passive, Aggressive, Assertive)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "     Eating Disorders     ",
            tool: "Body Dysmorphic Disorder Questionnaire (BDDQ)",
            male: 2,
            female: 12,
            total: 14,
          },
          {
            major: "Motivation",
            tool: "Motivational interviewing scale",
            male: 2,
            female: 12,
            total: 14,
          },

          {
            major: "Suicide",
            tool: "Columbia Suicide Severity Rating Scale",
            male: 2,
            female: 12,
            total: 14,
          },
        ],
      },
    ],
  },
];
const PsychologicalTest = () => {
  return (
    <div>
      {data.map((section, sectionIndex) => (
        <TableContainer component={Paper} key={sectionIndex}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography variant="h3" align="center">
                    Assessment or Psychological test used{" "}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {section.title}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Psychological/Clinical Condition</TableCell>

                <TableCell>
                  Assessment or Psychological Test/Tool used
                </TableCell>
                <TableCell>Male</TableCell>
                <TableCell>Female</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {section.sections.map((subsection, subsectionIndex) => (
                <React.Fragment key={subsectionIndex}>
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography variant="subtitle1" align="center">
                        {subsection.title}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {subsection.majors.map((major, majorIndex) => (
                    <TableRow key={majorIndex}>
                      <TableCell>{major.major}</TableCell>
                      <TableCell>{major.tool}</TableCell>

                      <TableCell>{major.male}</TableCell>
                      <TableCell>{major.female}</TableCell>
                      <TableCell>{major.total}</TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default PsychologicalTest;
