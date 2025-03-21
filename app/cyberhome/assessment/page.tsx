"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskAssessment, Evaluation } from "@/app/data/Information";

const Assessment = () => {
     const [answers, setAnswers] = useState<Record<number, string>>({});
        const [submitted, setSubmitted] = useState(false);
    
        const handleSelect = (questionId: number, option: string) => {
            setAnswers({ ...answers, [questionId]: option });
        };
    
        const handleSubmit = () => {
            setSubmitted(true);
        };
    
        const evaluateResults = () => {
            const answerCounts = { A: 0, B: 0, C: 0, D: 0 };
            Object.values(answers).forEach((answer) => {
                if (answer in answerCounts) {
                    answerCounts[answer as keyof typeof answerCounts]++;
                }
            });
    
            if (answerCounts.A + answerCounts.B > answerCounts.C && answerCounts.A + answerCounts.B > answerCounts.D) {
                return Evaluation.Basic;
            } else if (answerCounts.C > answerCounts.D) {
                return Evaluation.Advanced;
            } else {
                return Evaluation.FullScope;
            }
        };
    return (
        <div className="p-5">
        <div className="flex justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-6 text-neon-blue">Nano Sec Consulting</h1>
        </div>

        {!submitted ? (
            <div>
                {RiskAssessment.map((item) => (
                    <Card key={item.id} className="bg-black border-text-neon-blue my-4">
                        <CardHeader>
                            <CardTitle><h1 className="text-xl text-white">{item.Title}</h1></CardTitle>
                            <CardDescription><h1>{item.Instructions}</h1></CardDescription>
                        </CardHeader>
                        <CardContent className="text-white">
                            {item.Options && item.Options.map((option, index) => (
                                <div key={`${item.id}-${index}`} className="my-2">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={`question-${item.id}`}
                                            value={option[0]}
                                            checked={answers[item.id] === option[0]}
                                            onChange={() => handleSelect(item.id, option[0])}
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}

                <button
                    onClick={handleSubmit}
                    className="mt-6 p-3 bg-neon-blue text-white rounded-xl hover:bg-blue-700"
                >
                    Submit Answers
                </button>
            </div>
        ) : (
            <div className="mt-8">
                <h2 className="text-3xl text-white mb-4">Your Security Assessment Result:</h2>
                <p className="text-lg text-neon-blue">{evaluateResults()}</p>
            </div>
        )}
    </div>
    )
}

export default Assessment;