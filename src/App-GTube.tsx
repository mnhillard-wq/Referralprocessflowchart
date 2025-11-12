import { FlowchartNode, FlowchartArrow } from './components/FlowchartNode';
import { FileText, Users, BookOpen, FileCheck, ClipboardCheck, Database, UserCheck, CheckSquare, Stethoscope, Printer } from 'lucide-react';
import { Card } from './components/ui/card';
import { Checkbox } from './components/ui/checkbox';
import { Button } from './components/ui/button';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-blue-900 mb-0.5">G-Tube Caregiver Education</h1>
          <p className="text-gray-600">Simulation Discharge Program (SDP)</p>
        </div>

        {/* Print Button */}
        <div className="flex justify-center mb-2 print:hidden">
          <Button 
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            size="sm"
          >
            <Printer size={18} />
            Export to PDF
          </Button>
        </div>

        {/* MAIN FLOW - SINGLE COLUMN */}
        <div className="flex flex-col items-center space-y-2">
            <div className="bg-blue-900 text-white px-3 py-1.5 rounded-lg shadow-lg mb-1">
              <h2>Process Flow</h2>
            </div>

            {/* Step 1: Initial Consult */}
            <FlowchartNode
              type="start"
              title="SDP Education Request Initiated"
              icon={<FileText className="text-blue-600" size={24} />}
              variant="info"
            />

            <FlowchartArrow />

            {/* Split for NICU vs 6N/C/S */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-md p-2 w-full max-w-4xl border-2 border-blue-300">
              <p className="text-center text-blue-900 mb-1">Primary team member, care coordination, or social work initiates referral</p>
              <div className="text-center text-gray-700">(Email or EPIC Chat)</div>
            </div>

            <div className="relative w-full max-w-4xl my-2">
              <div className="grid grid-cols-2 gap-3">
                {/* NICU Pathway */}
                <div className="bg-white rounded-lg shadow-md p-2 border-2 border-blue-400">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-lg mb-2 text-center">
                    <span>NICU Patients</span>
                  </div>
                  <p className="text-gray-700 mb-1">Contact:</p>
                  <div className="space-y-0.5 text-gray-600 mb-2 text-sm">
                    <div>• Tricia Budway: <a href="mailto:trb9006@nyp.org" className="text-blue-600 hover:underline">trb9006@nyp.org</a></div>
                    <div>• Jane Harrington: <a href="mailto:jharring@nyp.org" className="text-blue-600 hover:underline">jharring@nyp.org</a></div>
                    <div>• Lilly Fox: <a href="mailto:elf9094@nyp.org" className="text-blue-600 hover:underline">elf9094@nyp.org</a></div>
                  </div>
                  <div className="border-t pt-1 mt-1">
                    <p className="text-gray-700 mb-1">CC:</p>
                    <div className="space-y-0.5 text-gray-600 text-sm">
                      <div>• Olivia Gasser, NP: <a href="mailto:olg9016@med.cornell.edu" className="text-blue-600 hover:underline">olg9016@med.cornell.edu</a></div>
                      <div>• MacKenzi Preston: <a href="mailto:mnh9003@med.cornell.edu" className="text-blue-600 hover:underline">mnh9003@med.cornell.edu</a></div>
                    </div>
                  </div>
                </div>

                {/* 6N/C/S Pathway */}
                <div className="bg-white rounded-lg shadow-md p-2 border-2 border-indigo-400">
                  <div className="bg-indigo-600 text-white px-2 py-1 rounded-lg mb-2 text-center">
                    <span>6N/C/S Patients</span>
                  </div>
                  <p className="text-gray-700 mb-1">Contact:</p>
                  <div className="space-y-0.5 text-gray-600 mb-2 text-sm">
                    <div>• Olivia Gasser, NP: <a href="mailto:olg9016@med.cornell.edu" className="text-blue-600 hover:underline">olg9016@med.cornell.edu</a></div>
                  </div>
                  <div className="border-t pt-1 mt-1">
                    <p className="text-gray-700 mb-1">CC:</p>
                    <div className="space-y-0.5 text-gray-600 text-sm">
                      <div>• MacKenzi Preston: <a href="mailto:mnh9003@med.cornell.edu" className="text-blue-600 hover:underline">mnh9003@med.cornell.edu</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-2 w-full max-w-4xl border-2 border-teal-200">
              <p className="text-gray-700 mb-1">Primary Team offers referral for PFAC Peer to Peer support if not yet done</p>
              <div className="text-gray-600 mb-2 text-sm">
                <div>Referrals email to Mariela Guerra: <a href="mailto:mag9152@nyp.org" className="text-blue-600 hover:underline">mag9152@nyp.org</a></div>
              </div>
              <a 
                href="YOUR_PDF_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <FileText size={14} />
                Download Referral Form (PDF)
              </a>
            </div>

            <FlowchartArrow />

            {/* Step 2: Formal Teaching */}
            <FlowchartNode
              type="process"
              title="SDP - Formal Hands-On Teaching"
              description="SDP provides teaching for family using a manikin/child. SDP documents using SDP smart phrase"
              icon={<Users className="text-amber-600" size={24} />}
              variant="warning"
            >
              <div className="bg-blue-100 rounded-lg p-2 border border-blue-300 mb-3">
                <p className="text-blue-900">
                  <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-2 py-1 rounded text-blue-700">.SDPGTUBE</code>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://drive.google.com/file/d/1uK2F9cYcN_HHkiaLzQRBe1ZaaKaDBWpc/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  <FileText size={16} />
                  MicKEY or MINI
                </a>
                <a 
                  href="https://drive.google.com/file/d/16kp4nRmmBuljvUOL1B7V_XIV3CxKx2xa/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  <FileText size={16} />
                  PEG Button
                </a>
                <a 
                  href="https://drive.google.com/file/d/1h-WXwlRncO_zKKm4L8gD0st5prwFo2TT/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  <FileText size={16} />
                  Traditional Long GT
                </a>
              </div>
            </FlowchartNode>

            <FlowchartArrow />

            {/* Step 6: Final Documentation */}
            <FlowchartNode
              type="process"
              title="Discharge Documentation"
              description="Discharge nurse documents completed education in EPIC"
              icon={<Database className="text-emerald-600" size={24} />}
              variant="emerald"
              maxWidth="max-w-3xl"
            >
              <div className="space-y-2">
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                  <p className="text-blue-900 mb-2">
                    <span className="font-semibold">Documentation Options:</span>
                  </p>
                  <div className="bg-emerald-50 rounded p-2 mb-2 border border-emerald-300">
                    <p className="text-emerald-900 text-sm">
                      Use Smart Phrase <span className="font-semibold">OR</span> take a photo of completed paper checklist and upload to Media
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {/* MicKEY Button Tubes */}
                    <div className="bg-white rounded p-2 border border-blue-300">
                      <div className="text-gray-700 mb-1 text-sm">MicKEY Button Tubes:</div>
                      <div className="flex flex-col gap-1">
                        <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-700 inline-block text-sm">.GTMICKEYNURSING</code>
                        <a 
                          href="https://docs.google.com/document/d/1KlmQgsK9wcVnnTZ6dqXtzRAJwsnR42lO/edit?usp=sharing&ouid=104174892965250681794&rtpof=true&sd=true" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors text-sm whitespace-nowrap"
                        >
                          <FileText size={12} />
                          Skills Sheet
                        </a>
                      </div>
                    </div>

                    {/* PEG Button Tubes */}
                    <div className="bg-white rounded p-2 border border-blue-300">
                      <div className="text-gray-700 mb-1 text-sm">PEG Button Tubes:</div>
                      <div className="flex flex-col gap-1">
                        <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-700 inline-block text-sm">.GTPEGNURSING</code>
                        <a 
                          href="https://docs.google.com/document/d/1_vjQQf050jFQve6u8I8EfdQciuoHlibB/edit?usp=drive_link&ouid=104174892965250681794&rtpof=true&sd=true" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors text-sm whitespace-nowrap"
                        >
                          <FileText size={12} />
                          Skills Sheet
                        </a>
                      </div>
                    </div>

                    {/* Traditional Long Tubes */}
                    <div className="bg-white rounded p-2 border border-blue-300">
                      <div className="text-gray-700 mb-1 text-sm">Traditional Long Tubes:</div>
                      <div className="flex flex-col gap-1">
                        <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-700 inline-block text-sm">.GTLONGTUBENURSING</code>
                        <a 
                          href="https://docs.google.com/document/d/1Ig_Bh2Gdrm-QjJlXk6t9iNjs_Iu7Vaw_/edit?usp=drive_link&ouid=104174892965250681794&rtpof=true&sd=true" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors text-sm whitespace-nowrap"
                        >
                          <FileText size={12} />
                          Skills Sheet
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FlowchartNode>

            <FlowchartArrow />

            {/* Step 7: Physician Review & Ready for Discharge */}
            <div id="physician-review-step">
              <FlowchartNode
                type="end"
                title="Physician Review Checklist & Ready for Discharge"
                icon={<UserCheck className="text-purple-600" size={24} />}
                variant="purple"
              />
            </div>
          </div>

          {/* RESIDENT DISCHARGE CHECKLIST - BOTTOM SECTION */}
          <div className="w-full max-w-6xl mt-4">
            <div className="bg-purple-800 text-white px-4 py-2 rounded-lg shadow-lg mb-2">
              <h2>Resident Discharge Checklist</h2>
            </div>

            {/* Resident Discharge Checklist */}
            <Card className="bg-white border-2 border-purple-300 shadow-lg p-3">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                <CheckSquare className="text-purple-600" size={20} />
                <h3 className="text-purple-900">Resident G-Tube Discharge Bundle Checklist</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Left Column */}
                <div className="space-y-2">
                  {/* Smart Phrase */}
                  <div className="bg-blue-100 rounded-lg p-2 border border-blue-300">
                    <p className="text-blue-900">
                      <span className="font-semibold">Smart Phrase:</span> <code className="bg-white px-2 py-1 rounded text-blue-700 text-sm">.RESGTCHECKLIST</code>
                    </p>
                  </div>

                  {/* Link to Full Checklist */}
                  <a 
                    href="https://docs.google.com/document/d/1d__ROcz1IiSozXbuvVy1dDXn_N_hzEhy9XTT1M3YP10/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors w-full justify-center"
                  >
                    <FileText size={16} />
                    View Complete Checklist
                  </a>

                  {/* Supply Orders */}
                  <div className="bg-purple-50 rounded-lg p-2">
                    <div className="text-gray-900 mb-1">Supply Orders:</div>
                    <div className="text-gray-600 space-y-0.5 text-sm mb-2">
                      <div>• <span className="font-medium">Cornell patients:</span> Olivia Gasser, NP</div>
                      <div>• <span className="font-medium">Queens patients:</span> Melissa Rose, MD</div>
                      <div>• <span className="font-medium">Backup:</span> Resident if unavailable</div>
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1DQ85GQgl530c8fUWlmdnMFG3z1HEKulU/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors text-sm w-fit"
                    >
                      <FileText size={12} />
                      EPIC Order Sheet
                    </a>
                  </div>
                </div>

                {/* Right Column - Key Items */}
                <div className="space-y-2">
                  <div className="bg-purple-50 rounded-lg p-2">
                    <div className="text-gray-600 space-y-0.5 text-sm">
                      <div>✓ Confirm all G-tube supplies ordered</div>
                      <div>✓ Confirm medications ordered (correct formulation/route)</div>
                      <div>✓ Confirm delivery of supplies, feeds, and medications</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-2">
                    <div className="text-gray-600 space-y-0.5 text-sm">
                      <div>✓ Review feeding regimen with family</div>
                      <div>✓ Review medication regimen with family</div>
                      <div>✓ Provide verbal handoff to PCP</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
      </div>
    </div>
  );
}
