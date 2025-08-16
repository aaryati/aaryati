
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaChartBar, FaDownload, FaSpinner, FaFile, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Helmet } from 'react-helmet';

interface AnalysisResult {
  fileName: string;
  connectorCount: number;
  componentCount: number;
  dataWeaveLineCount: number;
  totalLineCount: number;
  complexityLevel: string;
  complexityScore: number;
  connectorBreakdown: Record<string, number>;
  componentBreakdown: Record<string, number>;
  dataWeaveFiles: string[];
  configurationFiles: string[];
  analysisTimestamp: string;
}

const MuleAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/zip' && !selectedFile.name.endsWith('.zip')) {
        setError('Please select a valid ZIP file containing your Mule application.');
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please select a file to analyze.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('muleApp', file);

      const response = await fetch('/api/analyze-mule', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      const result = await response.json();
      setAnalysisResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExportCSV = async () => {
    if (!analysisResult) return;

    try {
      const response = await fetch('/api/export-analysis-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analysisResult),
      });

      if (!response.ok) {
        throw new Error('Export failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `mule-analysis-${analysisResult.fileName || 'report'}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      setError('Failed to export CSV. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Mule to Spring Boot Converter API Analyzer - Aaryati Technologies</title>
        <meta name="description" content="Analyze your MuleSoft applications for Spring Boot conversion. Get detailed complexity assessment, component breakdown, and migration recommendations for seamless Mule to Spring Boot transformation." />
        <meta name="keywords" content="mule to spring boot converter, mulesoft migration, spring boot analyzer, api migration tool, mule analyzer" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="inline-block text-xs font-semibold bg-green-500/20 text-green-400 px-3 py-1 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                MULE ANALYZER
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Analyze Your Mule Application
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Upload your MuleSoft application to get detailed analysis, complexity assessment, and migration recommendations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* How It Works - Simple 3-Step Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">HOW IT WORKS</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Simple 3-Step Process</h3>
              <p className="text-lg text-gray-600">
                Our Mule analyzer makes application analysis straightforward with a proven methodology
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
                
                {[
                  {
                    step: "01",
                    title: "Upload Your Mule Application",
                    description: "Securely upload your MuleSoft application ZIP file through our intuitive interface",
                    icon: <FaUpload className="w-6 h-6" />
                  },
                  {
                    step: "02", 
                    title: "Automated Analysis",
                    description: "Our AI platform analyzes your code to identify flows, connectors, transformations, and complexity",
                    icon: <FaChartBar className="w-6 h-6" />
                  },
                  {
                    step: "03",
                    title: "Review Results & Export",
                    description: "Review the comprehensive analysis report and export detailed insights to CSV format",
                    icon: <FaDownload className="w-6 h-6" />
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            {item.icon}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-blue-600 mb-1 block">STEP {item.step}</span>
                            <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {!analysisResult ? (
                <Card className="shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Upload Mule Application</CardTitle>
                    <CardDescription>
                      Select a ZIP file containing your MuleSoft application for analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors">
                      <input
                        type="file"
                        accept=".zip"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FaFile className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Choose a ZIP file or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          ZIP files containing MuleSoft applications only
                        </p>
                      </label>
                    </div>

                    {file && (
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-3">
                          <FaCheck className="w-5 h-5 text-green-600" />
                          <span className="text-green-800 font-medium">{file.name}</span>
                          <span className="text-green-600 text-sm">
                            ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleAnalyze}
                      disabled={!file || isAnalyzing}
                      className="w-full h-12 text-lg"
                    >
                      {isAnalyzing ? (
                        <>
                          <FaSpinner className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <FaChartBar className="w-5 h-5 mr-2" />
                          Analyze Mule Application
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                // Analysis Results - Minimalistic Design
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <FaChartBar className="w-5 h-5 text-gray-700" />
                      <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        onClick={() => {
                          setAnalysisResult(null);
                          setFile(null);
                          setError(null);
                        }}
                        variant="outline" 
                        size="sm"
                        className="text-red-600 border-red-300 hover:bg-red-100 hover:border-red-400 hover:text-red-700 transition-colors"
                      >
                        + Analyze Another
                      </Button>
                      <Button onClick={handleExportCSV} variant="outline" size="sm">
                        📄 Export CSV
                      </Button>
                    </div>
                  </div>

                  {/* File Information Card */}
                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaFile className="w-4 h-4 text-blue-600" />
                      <h3 className="font-semibold text-slate-800">File Information</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-slate-600">File Name:</span>
                        <div className="text-slate-800">{analysisResult.fileName}</div>
                      </div>
                      <div>
                        <span className="font-medium text-slate-600">Analysis Date:</span>
                        <div className="text-slate-800">{analysisResult.analysisTimestamp}</div>
                      </div>
                    </div>
                  </Card>

                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Complexity Level */}
                    <Card className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          analysisResult.complexityLevel === 'HIGH' ? 'bg-orange-50 border border-orange-200' :
                          analysisResult.complexityLevel === 'MEDIUM' ? 'bg-amber-50 border border-amber-200' : 'bg-emerald-50 border border-emerald-200'
                        }`}>
                          <span className={`text-sm font-bold ${
                            analysisResult.complexityLevel === 'HIGH' ? 'text-orange-600' :
                            analysisResult.complexityLevel === 'MEDIUM' ? 'text-amber-600' : 'text-emerald-600'
                          }`}>⚠</span>
                        </div>
                        <div className={`text-right text-xs px-2 py-1 rounded-full ${
                          analysisResult.complexityLevel === 'HIGH' ? 'bg-orange-50 text-orange-700 border border-orange-200' :
                          analysisResult.complexityLevel === 'MEDIUM' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {analysisResult.complexityScore}
                        </div>
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${
                        analysisResult.complexityLevel === 'HIGH' ? 'text-orange-600' :
                        analysisResult.complexityLevel === 'MEDIUM' ? 'text-amber-600' : 'text-emerald-600'
                      }`}>
                        {analysisResult.complexityLevel === 'HIGH' ? 'High' :
                         analysisResult.complexityLevel === 'MEDIUM' ? 'Medium' : 'Low'}
                      </div>
                      <div className="text-sm text-slate-600 mb-1">Complexity Level</div>
                      <div className="text-xs text-slate-500">
                        {analysisResult.complexityLevel === 'HIGH' ? 'Complex application with extensive integrations and transformations' : 
                         analysisResult.complexityLevel === 'MEDIUM' ? 'Moderate complexity with some integrations' :
                         'Simple application with basic flows'}
                      </div>
                    </Card>

                    {/* Connectors */}
                    <Card className="p-4 bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center border border-sky-200">
                          <span className="text-sky-600 text-sm font-bold">🔌</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-sky-600 mb-1">{analysisResult.connectorCount}</div>
                      <div className="text-sm text-slate-600">Connectors</div>
                    </Card>

                    {/* Components */}
                    <Card className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center border border-teal-200">
                          <span className="text-teal-600 text-sm font-bold">🧩</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-teal-600 mb-1">{analysisResult.componentCount}</div>
                      <div className="text-sm text-slate-600">Components</div>
                    </Card>

                    {/* DataWeave Lines */}
                    <Card className="p-4 bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center border border-violet-200">
                          <span className="text-violet-600 text-sm font-bold">&lt;/&gt;</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-violet-600 mb-1">{analysisResult.dataWeaveLineCount}</div>
                      <div className="text-sm text-slate-600">DataWeave Lines</div>
                    </Card>
                  </div>

                  {/* Breakdown Sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Connectors Usage Breakdown */}
                    <Card className="p-4 bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-sky-600 text-sm">🔌</span>
                        <h3 className="font-semibold text-slate-800">Connectors Usage Breakdown</h3>
                      </div>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {Object.entries(analysisResult.connectorBreakdown).map(([connector, count], index) => (
                          <div key={index} className="flex items-center justify-between py-2 px-3 bg-white/60 rounded-lg border border-sky-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                              <span className="text-sm text-slate-700 font-medium">{connector}</span>
                            </div>
                            <div className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                              {count}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Components Breakdown */}
                    <Card className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-teal-600 text-sm">🧩</span>
                        <h3 className="font-semibold text-slate-800">Components Breakdown</h3>
                      </div>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {Object.entries(analysisResult.componentBreakdown)
                          .sort(([,a], [,b]) => b - a)
                          .slice(0, 10)
                          .map(([component, count], index) => (
                          <div key={index} className="flex items-center justify-between py-2 px-3 bg-white/60 rounded-lg border border-teal-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                              <span className="text-sm text-slate-700 font-medium">{component}</span>
                            </div>
                            <div className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                              {count}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Configuration and DataWeave Files */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Configuration Files */}
                    <Card className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <FaFile className="w-4 h-4 text-indigo-600" />
                        <h3 className="font-semibold text-slate-800">Configuration Files</h3>
                      </div>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {analysisResult.configurationFiles?.slice(0, 8).map((file, index) => (
                          <div key={index} className="flex items-center space-x-2 py-2 px-3 bg-white/60 rounded-lg border border-indigo-100">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                            <span className="text-xs text-slate-700 truncate font-medium">{file.split('/').pop()}</span>
                          </div>
                        ))}
                        {analysisResult.configurationFiles?.length > 8 && (
                          <div className="text-xs text-slate-600 mt-2 px-3 py-1 bg-white/40 rounded-lg border border-indigo-100">
                            +{analysisResult.configurationFiles.length - 8} more files
                          </div>
                        )}
                      </div>
                    </Card>

                    {/* DataWeave Files */}
                    <Card className="p-4 bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-violet-600 text-sm">&lt;/&gt;</span>
                        <h3 className="font-semibold text-slate-800">DataWeave Files</h3>
                      </div>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {analysisResult.dataWeaveFiles?.slice(0, 8).map((file, index) => (
                          <div key={index} className="flex items-center space-x-2 py-2 px-3 bg-white/60 rounded-lg border border-violet-100">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span className="text-xs text-slate-700 truncate font-medium">{file.split('/').pop()}</span>
                          </div>
                        ))}
                        {analysisResult.dataWeaveFiles?.length > 8 && (
                          <div className="text-xs text-slate-600 mt-2 px-3 py-1 bg-white/40 rounded-lg border border-violet-100">
                            +{analysisResult.dataWeaveFiles.length - 8} more files
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>

                  {/* Summary Statistics */}
                  <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
                    <div className="flex items-center space-x-2 mb-6">
                      <FaChartBar className="w-4 h-4 text-slate-600" />
                      <h3 className="font-semibold text-slate-800">Summary Statistics</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center p-3 bg-white/60 rounded-lg border border-slate-200">
                        <div className="text-2xl font-bold text-slate-700 mb-1">{analysisResult.totalLineCount}</div>
                        <div className="text-sm text-slate-600">Total Lines</div>
                      </div>
                      <div className="text-center p-3 bg-white/60 rounded-lg border border-slate-200">
                        <div className="text-2xl font-bold text-slate-700 mb-1">{analysisResult.configurationFiles?.length || 0}</div>
                        <div className="text-sm text-slate-600">Config Files</div>
                      </div>
                      <div className="text-center p-3 bg-white/60 rounded-lg border border-slate-200">
                        <div className="text-2xl font-bold text-slate-700 mb-1">{analysisResult.dataWeaveFiles?.length || 0}</div>
                        <div className="text-sm text-slate-600">DW Files</div>
                      </div>
                      <div className="text-center p-3 bg-white/60 rounded-lg border border-slate-200">
                        <div className="text-2xl font-bold text-slate-700 mb-1">{analysisResult.complexityScore}</div>
                        <div className="text-sm text-slate-600">Complexity Score</div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MuleAnalyzer;
